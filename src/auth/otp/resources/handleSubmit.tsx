import axios, { AxiosError } from 'axios'

export const handleSubmit = async (
  target:HTMLFormElement,
  setLd:(loading:boolean) => void,

  emailUser:string,
  handleToast:(message:string, type?:"success" 
  | "error" | "loading" | "custom") => void,
  setNewPsw:(value:boolean) => void):Promise<void> => {
  setLd(true)

  const code = Array.from(target.querySelectorAll('input'))
  .map(input => input.value).join('')

  try {
    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_PROXY}authVerify`, 
    {email:emailUser, code})

    console.log(data)
    setNewPsw(true)
  } 
  
  catch (error) {
    const axiosError = error as AxiosError<{message:string}>

    handleToast("Erro interno!", "error")

    if (axios.isAxiosError(axiosError)) {
      const message = axiosError.response?.data?.message 
      || axiosError.message
      console.error(message)
    } 
    
    else console.error(error)
  } 
  
  finally {setLd(false)}
}
