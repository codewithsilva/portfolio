import { device } from "@/style/defaults/tags";
import React, {useEffect, useState} from "react"
import styled, { css } from "styled-components"

interface VerticalMarquee {
  words:string[]; delay?:number;
  transitionDuration?: number
}

const mobile = css`
  width:13.5rem;
  top:1rem;
  left:-.5rem;

  &, span {
    padding:.5rem;
    height:${({theme})=>theme.rem(55)};
  }

  span {
    top:-1.5rem;
    font-size:2.75rem;
  }
`,

Bdo = styled.bdo`
  width:25.5rem;
  overflow:hidden;
  top:2.5rem;
  left:-.25rem;
  
  &, span {
    padding:2rem 0 1.5rem .5rem;
    height:${({theme})=>theme.rem(133)};
  }

  span {
    font-size:5.5rem;
    white-space:nowrap;
    line-height:5.5rem;
    pointer-events:none;
    ${({theme})=>theme.absolute}
  }

  ${device(css`${mobile}`)}
`

export const Marquee: React.FC<VerticalMarquee> = ({
  words, delay=5000, transitionDuration=800,
}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (words.length <= 1) return

    const interval = setInterval(() => setIndex(
    prev => (prev + 1) % words.length), delay)

    return () => clearInterval(interval)
  }, [words.length, delay])

  return (
    <Bdo>{words.map((word, i) => (<span key={`${word}-${i}`}
    style={{opacity:i === index? 1 : 0,

    transition:`opacity ${transitionDuration}ms ease`}}>
    {word}</span>))}</Bdo>
  )
}
