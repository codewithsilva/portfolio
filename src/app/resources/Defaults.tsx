import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useGlobalCtx } from '@/app/context/Global'

import { rotate } from '@/style/defaults/default'
import { ArrowLeft, KeyRound } from 'lucide-react'

//mincomponents
const Styled = styled.dl`
${({theme})=>theme.screen}
${({theme})=>theme.flex.center}
background:${({theme})=>theme.color.primary};

&.ctn {
  ${({theme})=>theme.screenContainer}
  background:transparent;

  dt {
    ${({theme})=>theme.sameSize(theme.rem(36))}
    border:${({theme})=>theme.rem(3)} 
    solid ${({theme})=>theme.color.primary};
    border-bottom-color:transparent;
  }
}

&, &.ctn {dt {
border-left-color:transparent;
border-right-color:transparent;}}

dt {
  ${({theme})=>theme.sameSize(theme.rem(70))}
  border-radius:100%;
  border:${({theme})=>theme.rem(5)} 
  solid ${({theme})=>theme.color.secondary};
  border-left-color:transparent;
  border-right-color:transparent;
  ${rotate}
}`

export const Ld = ({ctn=false}) => {
return (<Styled className={ctn?'ctn':''}><dt></dt></Styled>)}

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
