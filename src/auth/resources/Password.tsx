import { useEffect, useState, useRef } from "react"

import axios from 'axios'
import { useGlobalCtx } from "@/app/context/Global"

import { Input } from "../Input"
import { Button } from "@/app/resources/Defaults"


const baseFields = { icon: "psw", type: "password", psw: true },
arr = {
  new: [
    { ...baseFields, id: "password", name: "password", placeholder: "Senha", autocomplete: "password" },
    { ...baseFields, id: "repeat-psw", name: "repeatPassword", placeholder: "Repetir Senha", autocomplete: "repeatPassword" }
  ],
  changing: [
    { ...baseFields, id: "current-psw", name: "current-password", placeholder: "Senha Atual", autocomplete: "current-password" },
    { ...baseFields, id: "password", name: "password", placeholder: "Nova Senha", autocomplete: "password" },
    { ...baseFields, id: "repeat-psw", name: "repeatPassword", placeholder: "Repetir Senha", autocomplete: "repeatPassword" }
  ]
}

interface PasswordProps { type: keyof typeof arr; withForm?: boolean }
export const Password: React.FC<PasswordProps> = ({ type, withForm = false }) => {
  const { showAdvice, emailUser, handleLd, handleAdvice, 
  handleVerify, handleToast, user } = useGlobalCtx(),

  [sharedState, setSharedState] = useState<Record<string, string>>({}),
  initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      arr['new'].forEach(field => handleVerify(field.name, false))
      initialized.current = true
    }
  }, [handleVerify])

  useEffect(() => {
    Object.keys(sharedState).forEach(key => {
      handleVerify(key, !!sharedState[key])
    })
  }, [sharedState, handleVerify])

  const content = arr[type].map((inputProps, index) => (
    <Input key={index} {...inputProps} showAdvice={showAdvice} 
    sharedState={sharedState} setSharedState={setSharedState}/>
  )),

  handleFormSubmit = async (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault()
    const { password, repeatPassword } = sharedState
    
    console.log(emailUser || user?.email)
    if (!password || password !== repeatPassword) {
      handleAdvice(true)
      return
    }

    try {
      handleLd(true)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}newPassword`, {
      email:emailUser || user?.email, password:password})

      handleToast("Senha Alterada com Sucesso! Redirecionando...", "success")
      setTimeout(() => window.location.reload(), 2000)
      console.log(response.data)
    }

    catch (error) {console.error("Erro ao redefinir senha", error)}
    finally {handleLd(false)}
  }

  return withForm? <form onSubmit={handleFormSubmit} noValidate>{content}<Button /></form> : <>{content}</>
}
