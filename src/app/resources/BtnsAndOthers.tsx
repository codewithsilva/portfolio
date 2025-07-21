import { useState, useEffect } from "react"
import { FaWhatsapp } from 'react-icons/fa'
import styled from 'styled-components'

import { svg } from '@/app/resources/svgs'
import { twerk } from '@/style/defaults/default'
import { Button } from "@/style/defaults/tags"

const Zap = styled.a`
  padding:.2rem;
  background:${({theme})=>theme.gradient('#25D366','#128C7E')};
  ${({theme})=>theme.shadow('#128C7E')}
  position:relative;

  svg path {fill:white}
  &.act {
    ${twerk}
  }
`

type ZapBtnProps = {anin?:boolean; boleto?:boolean; number?:string;}

export const ZapBtn = ({anin=false, boleto=false}:ZapBtnProps) => {
  const [isAnimating, setIsAnimating] = useState(false),

  openWhatsApp = () => {window.open(
  `https://wa.me/${process.env.NEXT_PUBLIC_ZAP}?text=${process.env.NEXT_PUBLIC_ZAP_MSG}`,
  "_blank", "noopener,noreferrer")}

  useEffect(() => {
    if (!anin) return

    const startAnimation = () => setIsAnimating(true),
    stopAnimation = () => {
      setIsAnimating(false)
      setTimeout(startAnimation, 5000)
    }
    startAnimation()

    const timeoutId = setTimeout(stopAnimation, 5000)
    return () => clearTimeout(timeoutId)
  }, [anin, isAnimating])

  const className = isAnimating? 'act' : ''
  if (boleto) {
    return (
      <Button onClick={openWhatsApp}>
      <svg.whatsapp/> 2ª via boleto</Button>
    )
  }

  return (
    <Zap className={className} onClick={openWhatsApp} 
    onAnimationEnd={() => setIsAnimating(false)}>
    <FaWhatsapp size={40}/></Zap>
  )
}

export const ScrollTop = () => {
  const [show, setShow] = useState(false),
  scrollToTop = () => window.scrollTo({top:0,behavior:"smooth"})

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 200)
    

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return show? (<a onClick={scrollToTop} 
  style={{cursor:"pointer"}}><svg.arrowHead/></a>) : null
} 
