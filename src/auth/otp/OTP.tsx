import { useRef, useState, useCallback, useEffect } from 'react'
import { useGlobalCtx } from '@/app/context/Global'

import { formatTime } from '@/app/resources/utils'
import { Button } from '@/app/resources/Defaults'
import { handleSubmit } from './resources/handleSubmit'

import { Styled } from './resources/Styled'
import { Password } from '../resources/Password'

interface OTPProps {txt?:string; length?:number; 
codeMail?:number; setTfa?:(value:boolean) => void}

export const OTP = ({txt='enviado por E-MAIL!', 
length=6, codeMail=0, setTfa}: OTPProps) => {
  const {handleLd, ld, handleAdvice, emailUser,
  handleVerify, handleHasMail, handleToast} = useGlobalCtx(),

  [otp, setOtp] = useState<string[]>(new Array(length).fill('')),
  [rightCode, setRightCode] = useState(''),

  [newPsw, setNewPsw] = useState(false),
  inputRefs = useRef<(HTMLInputElement | null)[]>([]),
  formRef = useRef<HTMLFormElement>(null),
  hasCode = codeMail !== 0,

  handleOtpType = useCallback(() => {
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll('input'),
      otpValues = Array.from(inputs).map(input => input.value).join('')
      if (!hasCode) {handleSubmit(formRef.current, 
      handleLd, emailUser, handleToast, setNewPsw)} 

      else if (otpValues === String(codeMail)) {setNewPsw(true)} 
      else {setRightCode('error')}
    }
  }, [hasCode, codeMail, handleLd, emailUser, handleToast]),

  handleInput = useCallback((index:number, value:string) => {
      if (!/^\d?$/.test(value)) return

      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      setRightCode('')

      if (value && index < length - 1) inputRefs.current[index + 1]?.focus()
      else if (value && index === length - 1) {
        inputRefs.current[index]?.blur()
        handleOtpType()
      }
    }, [otp, length, handleOtpType]
  ),

  handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()}
    },[otp]
  ),

  handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()

    const pasteData = e.clipboardData.getData('text').slice(0, length),
    newOtp = [...otp]

    pasteData.split('').forEach((char, i) => {
      if (/^\d$/.test(char)) {
        newOtp[i] = char
        if (inputRefs.current[i]) inputRefs.current[i]!.value = char
      }
    })
    setOtp(newOtp)

    if (formRef.current) handleSubmit(formRef.current, 
    handleLd, emailUser, handleToast, setNewPsw)},
    [otp, length, handleLd, emailUser, handleToast]
  ),

  handleFormSubmit = useCallback(
  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formRef.current) handleOtpType()
  },[handleOtpType])

  useEffect(() => {
    handleHasMail(true)
    handleVerify('reset')

    handleAdvice(false)
  }, [handleHasMail, handleVerify, handleAdvice])

  const [timeLeft, setTimeLeft] = useState(3600)
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prevTime => {if (prevTime <= 1) {
        clearInterval(countdown)
        if (setTfa) setTfa(false)

        return 0}
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [setTfa])

  return (<>{!newPsw? (
    <Styled onSubmit={handleFormSubmit} ref={formRef} noValidate>
      
      <fieldset className='otp'><label>Insira o código {txt}</label>
        <span>{otp.map((_, index) => (
          <input key={index} ref={el => {inputRefs.current[index] = el}} 
          type='password' maxLength={1} value={otp[index]} disabled={ld} 
          onChange={e => handleInput(index, e.target.value)} onPaste={handlePaste} 
          
          onKeyDown={e => handleKeyDown(index, e)} className={`${length === 6 ? 'min' : ''} ${rightCode}`}/>))}
        </span>

        <Button txt='VERIFICAR'/><a>{formatTime(timeLeft)}</a>
      </fieldset>
    </Styled>) : <Password type='new' withForm={true}/>}</>
  )
}
