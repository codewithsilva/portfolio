import styled from 'styled-components'
import { useGlobalCtx } from '@/app/context/Global'

import { SiWhatsapp, SiTelegram } from 'react-icons/si'
import { FaFilePdf, FaFileWord } from 'react-icons/fa'

import { ExternalLink, Download } from 'lucide-react'
import { downloadResume } from './download'

import { blur, status } from '@/style/defaults/button'
import { appear } from '@/style/defaults/default'

const SocialsCtn = styled.div`
  ${({theme})=>theme.flex.column}
  gap:1rem;

  nav, span, p, button, li {width:100%;}
  nav, p, nav ol li:last-child, button {
    ${({theme})=>theme.flex.center}
  }

  nav {
    gap:.5rem;
    ${appear({drc:'right', dur:.2, scl:true})}
    
    ol, li:first-child {border-radius:1rem;}
    
    ol {
      cursor:pointer;
      ${blur}
      ${({theme})=>theme.flex.startColumn}
      gap:.5rem;
      width:50%;
      height:7rem;
    }

    li, button {
      padding:.5rem;
      padding-left:1rem;
      gap:.5rem;
    }

    li:first-child {
      overflow:hidden;
      height:3.5rem;
      position:relative;
      ${({theme})=>theme.flex.startCenter}
      border-bottom:1px solid ${({theme})=>
      theme.hexToRgba(theme.color.default, .3)};
      ${({theme})=>theme.gradient(theme.color.white, '')}

      &:after, svg {border-radius:2rem;}

      &:after {
        ${({theme})=>theme.defDoubleDot}
        position:absolute;
        top:.6rem;
        left:.7rem;
        ${({theme})=>theme.sameSize(theme.rem(33))}
        z-index:-1;
        background:${({theme})=>theme.color.default};
      }
    }

    li:last-child {text-decoration:underline}
  }

  p:not(nav ol p) {
    font-size:.8rem;
    text-align:center;
    position:relative;  
    ${status}
  }

  @media (max-width:${({theme})=>theme.rem(530)}) {
    nav li:last-child, nav button {font-size:.6rem}
  }
`

type InfoPanelProps = {type:'contact' | 'resume'}
export const Containers = ({type}:InfoPanelProps) => {
  const {handleLd} = useGlobalCtx(),
  
  data = {contact:[{icon:<SiWhatsapp size={24} fill="#25D366"/>,
  label:'Whatsapp', detail:`${process.env.NEXT_PUBLIC_NUMBER}`,
  extra: <ExternalLink size={16} />},
  
  {icon:<SiTelegram size={24} fill="#0088CC"/>, label:'Telegram',
  detail:`@${process.env.NEXT_PUBLIC_ME}`, 
  extra:<ExternalLink size={16}/>}],
  
  resume:[{icon:<FaFilePdf size={24} 
  fill="#FF0000"/>, label:'PDF', button:"Download"},
  {icon:<FaFileWord size={24} 
  fill="#2B579A"/>, label:'DOCX', button:'Download'}]},

  footer = {contact:'Available for new opportunities',
  resume:'Easily updatable via .env'}

  return (
    <SocialsCtn><nav>
    
    {data[type].map((item, i) => {
      const isContact = type === 'contact',
      handleClick = () => {if (!isContact) return  

      const urls = {
        Whatsapp:process.env.NEXT_PUBLIC_ZAP,
        Telegram:process.env.NEXT_PUBLIC_TELEGRAM,
      },
      link = urls[item.label as 'Whatsapp' | 'Telegram']
      if (link) window.open(link, '_blank')
    }

    return (
    <ol key={i} onClick={handleClick}>
      <li>{item.icon} {item.label}</li>
      {'detail' in item && <li>{item.detail} 
      {item.extra}</li>}

      {'button' in item && (
      <button onClick={e => {
        e.stopPropagation()

        downloadResume(
        item.label.toLowerCase() as 'pdf' | 'docx'
        , handleLd)
      }}>
      {item.button} <Download size={16}/></button>)}
    </ol>)})}</nav>
    <p>{footer[type]}</p></SocialsCtn>
  )     
}
