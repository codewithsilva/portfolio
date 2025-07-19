import axios from 'axios'
import { NextRouter } from 'next/router'

export const handleSubmit = async (
  target:HTMLFormElement, setLd:(loading:boolean) => void, 
  verify:Record<string, boolean>, handleAdvice: (advice:boolean) => void, 
  type:'signup' | 'login', handleHasMail: (hasMail:boolean) => void, 

  setMailFound:(found:boolean) => void, 
  handleToast:(message:string, type?: "success" 
  | "error" | "loading" | "custom") => void,

  setTwerk:(found:boolean) => void,
  router:NextRouter, handleAuth:(auth:boolean) => void) => {

  const PROXY = process.env.NEXT_PUBLIC_PROXY,
  formData = new FormData(target),
  formObject = Object.fromEntries(formData.entries()) as Record<string, string>,

  conditions = Object.keys(verify).length === 0 || 
  Object.values(verify).some(value => value === false),
  handleSuccess = async (token:string) => {
    handleAuth(true)
    localStorage.setItem("token", token)
    await router.push('/dashboard')
  }
  
  if (conditions) {return handleAdvice(true)}

  if (type === 'signup') {
    const {name, email, password, repeatPassword} = formObject
    if (password !== repeatPassword) {return handleAdvice(true)}

    setLd(true)
    try {
      const response = await axios.post(`${PROXY}signup`, 
      {name, email, password})
      console.log(response)
      
      const sendEmail = await axios.post(`${PROXY}sendEmail`, 
      {email, name, password, type:'invite'})
      console.log(sendEmail)

      handleToast("Usuário criado com sucesso! Um E-mail foi enviado com a confirmação", "success")
      setTimeout(async () => await router.push('/dashboard'),2000)
      handleAdvice(false)
    } 

    catch (error) {
      setMailFound(true)
      handleHasMail(false)

      handleAdvice(true)
      setTwerk(true)

      if (axios.isAxiosError(error) && error.response) 
        console.error("Erro:", error.response.data.message)
      
      else {
        console.error("Erro desconhecido:", error)
        handleToast("Erro ao cadastrar, tente novamente", "error")
      }
    }
  }

  else {
    setLd(true)

    try {
      const { email, psw } = formObject,
      response = await axios.post(`${PROXY}login`,{ 

      email:email, password:psw}, {
      headers: {"Content-Type": "application/json"}})
    
      handleHasMail(true)
      setMailFound(true)
      await handleSuccess(response.data.token)
    } 
    catch (error) {
      if (axios.isAxiosError(error)) {
        setTwerk(true)

        if (error.response?.status === 404) {
          handleHasMail(false)
          setMailFound(false)
        }

        if (error.response?.status === 400)
          handleToast("Senha Incorreta, tente novamente", "error")

        else handleToast("Erro Interno, tente mais tarde", "error")
      }
    
      handleAdvice(true)
    }
  }

  setTimeout(()=>setLd(false),2000)
}
