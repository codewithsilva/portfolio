import React from 'react'
import styled from 'styled-components'

import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiFigma, SiMysql, SiSqlite, SiPython, SiOpenai, SiFastapi,
  SiTelegram, SiInstagram, SiWhatsapp, SiPytorch, SiNumpy, SiGithub,
} from "react-icons/si"

export const Techs = styled.div`
  background:${({theme})=>theme.hexToRgba(theme.color.neutral, .1)};
  backdrop-filter:blur(1rem);
  position:absolute;
  top:45dvh;
  left:-8rem;
  width:16rem;
  height:25rem;
  border-radius:10rem 10rem 6rem 10rem;
  box-shadow:0 0 20px 0px ${({theme})=>theme.hexToRgba(theme.color.primary, .1)};
  z-index:1;
  transform:rotate(50deg);
  overflow:hidden;
  animation:techs .7s linear forwards;

  @keyframes techs {
    from{left:-20rem;}
    to{left:-8rem;}
  }

  figure {
    ${({theme})=>theme.flex.centerStart}
    flex-wrap:wrap;
    gap:1rem;
    opacity:.5;
    padding:1.5rem .5rem;
    transform:rotate(-45deg);
  }

  svg, img {
    position:relative;
    ${({theme})=>theme.sameSize(theme.rem(35))}
  }

  svg {
    border-radius:1rem;
    &:nth-child(even) {top:-1rem;}
    &:nth-child(odd) {left:1rem;}
  }

  img {
    border-radius:2rem;
    opacity:1;
    left:-1rem;
    top:.5rem;
    transform:scale(1.3);
  }

  @keyframes blink {
    from {opacity:1;}
    to {opacity:0;}
  }
`

export const Life = () => {
  const icons = [
    {Icon:SiGithub, fill:'#FFF', title:'GitHub'},
    {Icon:SiJavascript, fill:'#F7DF1E', title:'JavaScript'},
    {Icon:SiReact, fill:'#61DAFB', title:'React'},
    {Icon:SiFigma, fill:'#F24E1E', title:'Figma'},

    {Icon:SiNodedotjs, fill:'#339933', title:'Node.js'},
    {Icon:SiFastapi, fill:'#009688', title:'FastAPI'},
    {Icon:SiPytorch, fill:'#EE4C2C', title:'PyTorch'},

    {Icon:SiNextdotjs, fill:'#FFF', title:'Next.js'},
    {Icon:SiMysql, fill:'#4479A1', title:'MySQL'},
    {Icon:SiSqlite, fill:'#003B57', title:'SQLite'},

    {Icon:SiTypescript, fill:'#3178C6', title:'TypeScript'},
    {Icon:SiInstagram, fill:'#E4405F', title:'Instagram'},
    {Icon:SiNumpy, fill:'#013243', title:'NumPy'},

    {Icon:SiPython, fill:'#3776AB', title:'Python'},
    {Icon:SiWhatsapp, fill:'#25D366', title:'WhatsApp'},
    {Icon:SiTelegram, fill:'#26A5E4', title:'Telegram Bot'},

    {Icon:SiOpenai, fill:'#10A37F', title:'OpenAI'},
    {Icon:SiGithub, fill:'#FFF', title:'GitHub'},
  ],

  getRandomAnin = () => {
    const durations = ['1.8s', '3.2s', '3.5s', '4s', '4.4s'],
    delays = ['0s', '.2s', '.5s', '.8s', '1s', '1.5s'],
    easings = ['ease', 'ease-in', 'ease-out', 'linear', 'ease-in-out'],

    duration = durations[Math.floor(Math.random() * durations.length)],
    delay = delays[Math.floor(Math.random() * delays.length)],
    easing = easings[Math.floor(Math.random() * easings.length)]

    return `blink ${duration} ${easing} ${delay} infinite alternate`
  }

  const svg = [...icons.map(({Icon, fill, title}, index) => {
  return (<Icon key={`${title}-${index}`} style={{fill, animation:getRandomAnin()}} title={title}/>)}),
  <img key="java-img" src="/svgs/java.svg" alt="Java" style={{animation:getRandomAnin()}}/>]

  return (<Techs><figure>{svg.map((Icon, i) => 
  <React.Fragment key={i}>{Icon}</React.Fragment>)}</figure></Techs>)
}
