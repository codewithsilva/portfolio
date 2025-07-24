import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ArrowLeft, KeyRound } from 'lucide-react'

import { useGlobalCtx } from '@/app/context/Global'

import { rotate, scanner } from '@/style/defaults/default'
import { blur } from '@/style/defaults/button'

//mincomponents
const Styled = styled.dl`
  ${({theme})=>theme.screen}
  ${({theme})=>theme.flex.center}
  ${blur}

  &.ctn {
    ${({theme})=>theme.screenContainer}
    background:transparent;

    dt {
      ${({theme})=>theme.sameSize(theme.rem(36))}
      border:${({theme})=>theme.rem(3)} 
      solid ${({theme})=>theme.color.default};
      border-bottom-color:transparent;
    }
  }

  &, &.ctn {dt {
  border-left-color:transparent;
  border-right-color:transparent;}}

  dt {
    ${({theme})=>theme.sameSize(theme.rem(130))}
    border-radius:100%;
    border:${({theme})=>theme.rem(5)} 
    solid ${({theme})=>theme.color.default};
    border-left-color:transparent;
    border-right-color:transparent;
    ${rotate('1.3s')}
  }

  span {
    font-size:2.4rem;
    pointer-events:none;
    user-select:none;
    padding:.5rem 1rem;
    border-radius:2rem;
    ${scanner}
    position:absolute;
  }
`

export const Ld = ({ctn=false}) => {
return (<Styled className={ctn?'ctn':''}><span>WS</span><dt></dt></Styled>)}

//array images
export const Img = ({ig = 'Logo'}: {ig?:string}) => {
  
  const arrs = [{type:'logo.png', text:'Logo'}],
  chs = arrs.find(img => img.text === ig)

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={chs? `/images/${chs.type}` : 
    '/logo.png'} alt={chs? chs.text : 'default'}/>
  )
}

interface Props {ask?:boolean; clN?:string; 
nav?:string; txt?:string; setTwerk?:(value:boolean) => void;}

export const Nav: React.FC<Props> = ({ask=true, clN='', 
nav='/login', txt='fazer Login', setTwerk=() => {}}) => {
  const router = useRouter(),
  {handleAdvice, ld, handleHasMail, 
  handleVerify} = useGlobalCtx(),

  handleNav = async () => {
    handleHasMail(true)
    handleVerify('reset')
    
    handleAdvice(false)
    setTwerk(false)

    await router.push(nav)
  }

  return (<>{ask && 'possui conta?'} <a className={`${clN} ${ld? 'off':''}`} 
  onClick={handleNav}>{clN === 'goback'? <ArrowLeft/> : 
  <>{txt === 'Recuperar'? <><KeyRound size={24}/> Recuperar</>:{txt}}</>}</a></>)
}

export const Button = ({txt='ENVIAR'}) => {
  const {ld} = useGlobalCtx()

  return (
    <button disabled={ld} className={ld?'ld':''}>
    {txt}{ld && <Ld ctn={true}/>}</button>
  )
}
