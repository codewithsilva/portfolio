import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path = [], ...query } = req.query
  const routePath = Array.isArray(path) ? path.join('/') : path
  const queryString = new URLSearchParams(query as Record<string, string>).toString()
  const targetUrl = `${process.env.NEXT_PUBLIC_API}${routePath}${queryString ? `?${queryString}` : ''}`

  console.log(req.method, query, targetUrl)

  try {
    const filteredHeaders: Record<string, string> = {}
    for (const [key, value] of Object.entries(req.headers)) {
      if (typeof value === 'string') filteredHeaders[key] = value
    }
    delete filteredHeaders['host']

    const method = req.method || 'GET'
    const isBodyAllowed = !['GET', 'HEAD'].includes(method)
    const contentType = req.headers['content-type'] || ''

    let data: any = undefined

    if (isBodyAllowed) {
      if (contentType.includes('application/json')) {
        // Lê corpo JSON
        const chunks: Buffer[] = []
        for await (const chunk of req) chunks.push(chunk)
        const rawBody = Buffer.concat(chunks).toString('utf8')
        data = rawBody ? JSON.parse(rawBody) : undefined
      } else {
        // Stream (ex: multipart/form-data)
        data = req
      }
    }

    // 👇 Força corretamente o content-type para JSON quando aplicável
    if (method === 'POST' && contentType.includes('application/json')) {
      filteredHeaders['content-type'] = 'application/json'
    }

    const axiosResponse = await axios({
      url: targetUrl,
      method,
      headers: filteredHeaders,
      data,
      responseType: 'arraybuffer', // Suporte a binários e JSON
      validateStatus: () => true,
    })

    const respContentType = axiosResponse.headers['content-type'] || ''
    res.status(axiosResponse.status)
    res.setHeader('content-type', respContentType)

    if (respContentType.includes('application/json')) {
      res.json(JSON.parse(Buffer.from(axiosResponse.data).toString('utf8')))
    } else {
      res.send(Buffer.from(axiosResponse.data))
    }
  } catch (err) {
    console.error('Erro no proxy:', err)
    res.status(500).json({ error: 'Proxy error' })
  }
}
