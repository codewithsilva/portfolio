import { useGlobalCtx } from '@/app/context/Global'

import { SiWhatsapp, SiTelegram } from 'react-icons/si'
import { FaFilePdf, FaFileWord } from 'react-icons/fa'

import { ExternalLink, Download } from 'lucide-react'
import { downloadResume } from '../resources/funcs'

import { SocialsCtn } from './Containers.style'

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
