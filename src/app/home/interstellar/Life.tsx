import React from 'react'
import styled, { css } from 'styled-components'

import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiFigma, SiMysql, SiSqlite, SiPython, SiOpenai, SiFastapi,
  SiTelegram, SiInstagram, SiWhatsapp, SiPytorch, SiNumpy, SiGithub,
} from "react-icons/si"
import { device } from '@/style/defaults/tags'

export const Life = () => {
  const icons = [
    { Icon: SiGithub, fill: '#FFF', title: 'GitHub', anim: 'blink 2.5s ease .2s infinite alternate' },
    { Icon: SiJavascript, fill: '#F7DF1E', title: 'JavaScript', anim: 'blink 3s ease-in .5s infinite alternate' },
    { Icon: SiReact, fill: '#61DAFB', title: 'React', anim: 'blink 2s ease-in-out 0s infinite alternate' },
    { Icon: SiFigma, fill: '#F24E1E', title: 'Figma', anim: 'blink 4s linear 1s infinite alternate' },
    { Icon: SiNodedotjs, fill: '#339933', title: 'Node.js', anim: 'blink 3.2s ease-out .8s infinite alternate' },
    { Icon: SiFastapi, fill: '#009688', title: 'FastAPI', anim: 'blink 2.8s ease .3s infinite alternate' },
    { Icon: SiPytorch, fill: '#EE4C2C', title: 'PyTorch', anim: 'blink 3.5s ease-in-out 1.2s infinite alternate' },
    { Icon: SiNextdotjs, fill: '#FFF', title: 'Next.js', anim: 'blink 3s ease-in 0s infinite alternate' },
    { Icon: SiMysql, fill: '#4479A1', title: 'MySQL', anim: 'blink 4s ease .7s infinite alternate' },
    { Icon: SiSqlite, fill: '#003B57', title: 'SQLite', anim: 'blink 2.2s linear .9s infinite alternate' },
    { Icon: SiTypescript, fill: '#3178C6', title: 'TypeScript', anim: 'blink 3.3s ease-in-out .6s infinite alternate' },
    { Icon: SiInstagram, fill: '#E4405F', title: 'Instagram', anim: 'blink 3.5s ease .4s infinite alternate' },
    { Icon: SiNumpy, fill: '#013243', title: 'NumPy', anim: 'blink 4.1s linear 0s infinite alternate' },
    { Icon: SiPython, fill: '#3776AB', title: 'Python', anim: 'blink 2.7s ease-in .5s infinite alternate' },
    { Icon: SiWhatsapp, fill: '#25D366', title: 'WhatsApp', anim: 'blink 2.6s ease-in-out .3s infinite alternate' },
    { Icon: SiTelegram, fill: '#26A5E4', title: 'Telegram Bot', anim: 'blink 3.1s ease .6s infinite alternate' },
    { Icon: SiOpenai, fill: '#10A37F', title: 'OpenAI', anim: 'blink 4.3s ease-out 0s infinite alternate' },
    { Icon: SiGithub, fill: '#FFF', title: 'GitHub (2)', anim: 'blink 3.8s ease .2s infinite alternate' },
    { img: '/svgs/java.svg', alt: 'Java', anim: 'blink 3s ease 0s infinite alternate' },
  ],

  renderedIcons = icons.map((item, i) => {
    if (item.Icon) {
      const {Icon, fill, title, anim} = item

      return <Icon key={i} title={title} 
      style={{fill, animation:anim}}/>
    } 
    
    else if (item.img) {
      return <img key={i} src={item.img} 
      alt={item.alt} style={{animation:item.anim}} />
    }
    return null
  })

  return <Techs><figure>{renderedIcons}</figure></Techs>
}

const mobile = css`
  top:65dvh;
  left:-5rem; 
  opacity:.6;
  width:12rem;
  height:18rem;

  svg, img {
    ${({theme})=>theme.sameSize(theme.rem(20))}
  }
`,

Techs = styled.div`
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

  ${device(css`${mobile}`)}

  @keyframes blink {
    from {opacity:1;}
    to {opacity:0;}
  }
`
