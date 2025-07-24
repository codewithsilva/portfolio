import { ArrowBigDown, ArrowDown, Download, Save, Zap } from "lucide-react"
import styled, { css } from "styled-components"
import { ploc } from "./default"
import { useRef } from "react"

const Btn = styled.button`
  background:${({theme})=>theme.hexToRgba(theme.color.default, .1)};
  color:${({theme})=>theme.color.default};
  text-shadow:0 0 3px ${({theme})=>theme.color.default};
  letter-spacing:.2rem;
  border-radius:2rem;
  font-size:.8rem;
  gap:.5rem;
  font-family:'CinzelStrong', serif;
  padding:.4rem .5rem .3rem 1.75rem;
  box-shadow:0 0 10px ${({theme})=>theme.hexToRgba(theme.color.default, .3)};
  
  &.main {top:2.8rem;}

  &, &:hover span, span {
    position:relative;
    ${({theme})=>theme.transition()}
  }

  &:hover span {transform:scale(1.1) rotate(15deg);}
  &, span {
    ${({theme})=>theme.flex.center}
  }

  span {
    border-radius:50%;
    background:${({theme})=>theme.color.default};
    padding:.5rem;
    transform:rotate(5deg);

    svg {
      ${ploc}
      
      stroke:${({theme})=>theme.color.primary};
    }
  } 
`

export const Button = ({
  txt="Let's Connect", main=false,
  cv=false
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null),

  handleMouseEnter = () => {
    if (!audioRef.current) audioRef.current = new Audio('/audio/btn.wav')
    else audioRef.current.currentTime = 0

    audioRef.current.play().catch(e => console.error("error", e))
  }

  return (  
    <Btn className={main?'main':''}
    onMouseEnter={handleMouseEnter}>{cv? 'Download CV' : txt} 
    <span>{cv? <ArrowBigDown/> : <Zap/>}</span></Btn>
  )
}

export const blur = css`
  backdrop-filter:blur(10px);
  background:${({theme})=>theme.hexToRgba(
  theme.color.default,.1)};
`
