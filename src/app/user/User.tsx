import { useEffect, useState, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import { useGlobalCtx } from '@/app/context/Global'

import { Input } from '@/auth/Input'
import { Password } from '@/auth/resources/Password'
import { handleSubmit } from './resources/handleSubmit'

import { Button, Nav } from '@/app/resources/Defaults'
import { FaAndroid, FaApple } from 'react-icons/fa'

interface UserProps {type?:'login' | 'signup';}
export const User: React.FC<UserProps> = ({type='login'}) => {
  const router = useRouter(),
  {handleLd, verify, handleAdvice, handleToast, showAdvice, 
  handleVerify, handleHasMail, isAuth, handleAuth} = useGlobalCtx(),
  
  [mailFound, setMailFound] = useState(false),
  [twerk, setTwerk] = useState(false),

  fields = useMemo(() => ({login: [{icon:'email', type:'email',
  id:'user', name:'email', autocomplete:'email', placeholder:'E-mail'},
  
  {icon:'psw', type:'password', id:'psw', name:'psw', 
  placeholder:'Senha', autocomplete:'current-password', psw:true}],
  
  signup:[{icon:'logo', type:'text', id:'name', name:'name', 
  autocomplete:'name', placeholder:'Nome', className:'name'},
        
  {icon:'email', type:'email', id:'user', 
  name:'email', autocomplete:'email', placeholder:'E-mail'}]}),[]),

  dataNav =[{nav:'/passwordrecovery', txt:'Recuperar'}],

  [usingLd, setUsingLd] = useState(false),
  handleFormSubmit = async (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault()
    const target = form.currentTarget

    setUsingLd(true)
    await handleSubmit(target, handleLd, verify, handleAdvice, type, 
    handleHasMail, setMailFound, handleToast, setTwerk, router, handleAuth)
    setUsingLd(false)
  },
  initialized = useRef(false),
  typeAndAuth = (isAuth && type !== 'signup'),

  storeLinks = [{href:process.env.NEXT_PUBLIC_APPLE,
  icon:<FaApple size={32}/>, key:'apple'},
  
  {href:process.env.NEXT_PUBLIC_ANDROID,
  icon:<FaAndroid size={32}/>, key:'android'}]

  useEffect(() => {
    if (type === 'signup' && !initialized.current) {
      fields['signup'].forEach(field => handleVerify(field.name, false))
      initialized.current = true
    }
  }, [type, fields, handleVerify])
  
  useEffect(() => {if (!usingLd) handleLd(false)}
  , [type, handleLd, handleVerify, fields, usingLd])

  useEffect(() => {if (typeAndAuth) router.push('/dashboard')}, [isAuth, router, typeAndAuth])

  return (
  <>{((!isAuth || !typeAndAuth)) && <form onSubmit={handleFormSubmit} key={type}
  className={`${type === 'signup'?'signup':''} 
  ${twerk?'twerk':''}`} noValidate>
    {fields[type].map((input, index) => (
    <Input key={index} {...input} showAdvice={showAdvice}
    mailFound={mailFound} setMailFound={setMailFound}/>))}

    {type === 'signup' && <Password type="new"/>}
    <Button txt={type === 'login'? 'ENTRAR':'CADASTRE-SE'}/>

    <fieldset>{type === 'login'? dataNav.map((item, index) => (<><Nav 
    ask={false} txt={item.txt} key={index} nav={item.nav} setTwerk={setTwerk}/>

    <p>{storeLinks.map(({href, icon, key}) => (
    <a key={key} href={href} target="_blank" rel='noopener noreferrer'>
    {icon}</a>))}</p></>)):null}</fieldset>
  </form>}</>) 
}
