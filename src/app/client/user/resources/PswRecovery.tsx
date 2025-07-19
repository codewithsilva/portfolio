import { useState } from "react"
import axios from 'axios'
import { useGlobalCtx } from "@/app/context/Global"

import { Input } from "@/auth/Input"
import { OTP } from "@/auth/otp/OTP"
import { Button, Nav } from "@/app/resources/Defaults"

export const PswRecovery = () => {
  const {handleLd, handleAdvice, handleHasMail, 
  showAdvice, verify, handleMail} = useGlobalCtx(),
  
  [tfa, setTfa] = useState(false),
  [codeMail, setCodeMail] = useState<number>(0),

  handleFormSubmit = async (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault()
    const PROXY = process.env.NEXT_PUBLIC_PROXY,
    
    formData = new FormData(form.currentTarget),
    formObject = Object.fromEntries(formData.entries()) as Record<string, string>,

    {email} = formObject
    if (Object.values(verify).some(value => value === false)) {return handleAdvice(true)}
    console.log(email)
    handleHasMail(true)
    handleLd(true)

    try {
      const response = await axios.get(`${PROXY}emailExists`, 
      {params:{email}}), status = response.status
     
      if (status === 200) {
        try {
          const sendCode = await axios.post(`${PROXY}sendEmail`, {email}),
          code = sendCode.data.code

          handleMail(email)
          setCodeMail(code)
          setTfa(true)
        }

        catch (error) {console.error(error)}
      } 
    } 
    catch (error:unknown) {
      handleHasMail(false)
      handleAdvice(true)
      handleLd(false)

      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) console.log('E-mail not found')
        
        else console.error(error.message)
      } 
      
      else if (error instanceof Error) console.error(error.message)
      else console.error(JSON.stringify(error))

      return
    }

    finally {handleLd(false)}
  }

  return (
    <>{!tfa?<form noValidate onSubmit={handleFormSubmit}>
      <Nav ask={false} txt='' nav='/login' clN='goback'/>

      <Input icon='email' type='email' id='email' showAdvice={showAdvice}
      name='email' autoComplete='email' placeholder="E-mail"/>
      
      <Button/>
    </form>:<OTP length={4} codeMail={codeMail} setTfa={setTfa}/>}</>
  )
}
