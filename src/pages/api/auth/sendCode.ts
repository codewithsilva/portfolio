class SendMailClient {
  private config: { url: string; token: string }

  constructor(config: { url: string; token: string }) {
    this.config = config
  }

  async sendMail(options: {
    from: { address: string; name: string }
    to: { email_address: { address: string; name: string } }[]
    subject: string
    htmlbody: string
  }): Promise<SendMailResponse> {
    console.log("Sending mail with options:", options)

    return Promise.resolve({
      status: "success",
      message: "Mail sent!",
      optionsUsed: options,
      configUsed: this.config,
    })
  }
}

interface SendMailResponse {
  status: string
  message: string
  optionsUsed: {
    from: {address: string; name: string}
    to: {email_address: { address: string; name: string }}[]
    subject: string
    htmlbody: string
  }
  configUsed: {url: string; token: string}
}

import { NextApiRequest, NextApiResponse } from "next"
import crypto from "crypto"

const client = new SendMailClient({
  url: process.env.ZEPT_URL!,
  token: `Zoho-enczapikey ${process.env.ZEPT_TOKEN}`,
})

const codeStore = new Map<string, { code: string; expiresAt: number }>(),
  generateCode = () => crypto.randomInt(1000, 9999).toString()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const {email} = req.body
      if (!email) return res.status(400).json({message:"Email is required"})

      const code = generateCode(),
      expiresAt = Date.now() + 60 * 60 * 1000
      codeStore.set(email, { code, expiresAt })

      const response = await client.sendMail({
        from: { address: "noreply@codewithsilva.com", name: `${process.env.NAME_APP}` },
        to: [{ email_address: { address: email, name: "User" } }],
        subject: "Verification Code",
        htmlbody: `<h3>Your Code: ${code}</h3>`,
      })

      console.log("Mail Response:", response)
      res.status(200).json({ message: "Code sent successfully", code })
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
