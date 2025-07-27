import { useRef } from "react"
import styled, { css } from "styled-components"

import { ClipboardList, Zap } from "lucide-react"
import { useGlobalCtx } from "@/app/context/Global"

import { ploc } from "./default"

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
  const {handleModal} = useGlobalCtx(),
  audioRef = useRef<HTMLAudioElement | null>(null),

  handleMouseEnter = () => {
    if (!audioRef.current) audioRef.current = new Audio('/audio/btn.wav')
    else audioRef.current.currentTime = 0

    audioRef.current.play().catch(e => console.error("error", e))
  }

  return (  
    <Btn className={main?'main':''} onClick={() => handleModal(true)}
    onMouseEnter={handleMouseEnter}>{cv? 'Grab my CV' : txt} 
    <span>{cv? <ClipboardList/> : <Zap/>}</span></Btn>
  )
}

export const blur = css`
  backdrop-filter:blur(10px);
  background:${({theme})=>theme.hexToRgba(
  theme.color.default,.1)};
`

export const status = css`
  gap:.5rem;

  &::before {
    ${({theme})=>theme.defDoubleDot}
    position:relative;
    width:.75rem;
    height:.75rem;
    background:${({theme})=>theme.color.default};
    border-radius:50%;
    animation:pulse 1.4s linear infinite;
    box-shadow:0 0 0 0 ${({theme})=>theme.color.default};
  }

  @keyframes pulse {
    0% {box-shadow:0 0 0 0 
    ${({theme})=>theme.hexToRgba(theme.color.default, .6)};}
    70% {box-shadow:0 0 0 10px
     ${({theme})=>theme.hexToRgba(theme.color.default, 0)};}
    100% {box-shadow:0 0 0 0 
    ${({theme})=>theme.hexToRgba(theme.color.default, 0)};}
  }
`

