import { useState, useEffect } from "react"
import styled from 'styled-components'

import { ArrowBigUpDash } from "lucide-react"
import { FaWhatsapp } from 'react-icons/fa'

import { twerk } from '@/style/defaults/default'
import { blur } from "@/style/defaults/button"

const Zap = styled.a`
  padding:.2rem;
  opacity:.3;
  ${blur}
  position:relative;

  svg path {fill:white}
  &.act {
    ${twerk}
  }
`

type ZapBtnProps = {anin?:boolean; boleto?:boolean; number?:string;}

export const ZapBtn = ({anin=false}:ZapBtnProps) => {
  const [isAnimating, setIsAnimating] = useState(false),

  openWhatsApp = () => {window.open(
  `https://wa.me/${process.env.NEXT_PUBLIC_ZAP}?text=${process.env.NEXT_PUBLIC_ZAP_MSG}`,
  "_blank", "noopener, noreferrer")}

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

  return (
    <Zap onClick={openWhatsApp} className={anin?'act':''}
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
  style={{cursor:"pointer"}}><ArrowBigUpDash/></a>) : null
} 
