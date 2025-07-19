import { useEffect } from 'react'
import { useRouter } from 'next/router'

import outBoard from '@/routers/outBoard'
import inBoard from '@/routers/inBoard'

import { Img, Ld } from '@/app/resources/Defaults'
import { Section } from '@/app/user/styled'

export default function DynamicPage() { 
  const router = useRouter(), { slug } = router.query,

  path = router.isReady? `/${Array.isArray(slug)? 
  slug.join('/') : slug || ''}` : null,
  
  route = path? [...outBoard, ...inBoard]
  .find((route) => route.path === path) : null

  useEffect(() => {
    if (router.isReady && path !== null) 
      if (!route) router.push('/')
  }, [router.isReady, path, route, router])

  if (!router.isReady || !path) { return <Ld /> }
  if (!route) { return <Ld /> }

  const { component, wrapper = false } = route

  return (wrapper?
  <Section><article>
  <Img ig='logo'/></article>
  {component}</Section>:component)
}
