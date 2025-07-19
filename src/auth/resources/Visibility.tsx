import { FC, useState } from 'react'
import { svg } from '@/app/resources/svgs'

interface VisibilityProps {id: string}

export const Visibility: FC<VisibilityProps> = ({id}) => {
  const [visible, setVisible] = useState(false),
  handleVisibility = () => {
    const psw = document.getElementById(id) as HTMLInputElement | null

    if (psw) {
      setVisible(!visible)
      psw.type = psw.type ==='password'?'text':'password'
    } 
  }

  return (
    <i onClick={handleVisibility} 
    className={visible?'act':''}
      
    aria-label={visible?'Esconder senha':'Mostrar senha'}
    role="button"><svg.eye/></i>
  )
}
