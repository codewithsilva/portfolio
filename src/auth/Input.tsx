import { FC, InputHTMLAttributes, useEffect, useState, useMemo, useCallback } from 'react'
import { useGlobalCtx } from '@/app/context/Global'

import { Visibility } from './resources/Visibility'
import { formatName } from '@/app/resources/utils'

import { Strong } from './styled/Styled'
import { svg } from '@/app/resources/svgs'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string; icon?: keyof typeof svg; psw?: boolean; 
  sharedState?: Record<string, string>; 

  setSharedState?: React.Dispatch<React.SetStateAction<Record<string, string>>>; 
  showAdvice?: boolean; mailFound?: boolean; setMailFound?: (value: boolean) => void
}

export const Input: FC<InputProps> = ({className='', icon, type='text', id, sharedState, 
setSharedState, name='', placeholder, autoComplete, psw=false, showAdvice=false, mailFound, setMailFound})=>{

  const { ld, handleVerify, hasMail, handleHasMail } = useGlobalCtx(),
  [state, setState] = useState({isFocused:false, inputValue:'', advice:'', touched:false,}),

  validators = useMemo(() => ({
    email:{regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message:hasMail?'Insira um E-mail válido' : !mailFound 
    ? 'E-mail não encontrado no sistema' : 'E-mail já cadastrado'},

    name: {regex: /^[a-zA-ZÀ-ÿ\s]{4,}$/, message: 'Mínimo de 4 caracteres',},
    password: {regex:/^.{6,}$/, message:'Pelo menos 6 caracteres'},

    psw: {regex:/^.{6,}$/, message:'Senha inválida/incorreta'},
    repeatPassword: {
      validate: (value:string)=>value === (sharedState?.password || ''),
      message: 'As senhas não coincidem',
    },
  }), [hasMail, mailFound, sharedState?.password]),

  validateString = useCallback((pattern: keyof typeof validators, value: string): boolean => {
    const validator = validators[pattern]
    if (!validator) return true

    if ('regex' in validator) return validator.regex.test(value)
    if ('validate' in validator) return validator.validate(value)
    return true
  }, [validators]),

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target
    if (name === 'name') value = formatName(value)

    if (name === 'email' && (!hasMail || mailFound)) {
      setMailFound?.(false)
      handleHasMail(true)
    }

    const isValid = name && validators[name as keyof typeof validators] 
    ? validateString(name as keyof typeof validators, value) : true

    if (sharedState && setSharedState && name) 
    setSharedState(prev => ({ ...prev, [name]: value }))

    if (name) handleVerify(name, isValid)

    setState(prev => ({...prev, inputValue: value, advice: name === 'repeatPassword' && !isValid 
    ? validators[name as keyof typeof validators]?.message || '' : prev.touched && !isValid 
    ? validators[name as keyof typeof validators]?.message || '' : '', isFocused: value.length > 0}))
  },

  handleBlur = () => {
    const isValid = name && validators[name as keyof typeof validators]? 
    validateString(name as keyof typeof validators, state.inputValue) : true

    if (name) handleVerify(name, isValid)

    setState(prev => ({...prev, isFocused: prev.inputValue.length > 0, 
    touched: true, advice: !isValid? 
    validators[name as keyof typeof validators]?.message || '' : '',}))
  },
  IconSvg = icon && svg[icon]

  useEffect(() => {
    if (name === 'email' && !hasMail) {
      const isValid = validators.email.regex.test(state.inputValue)

      setState(prev => ({...prev, advice: isValid? validators['email'].message : 
      !isValid? validators.email.message : ''}))
    }
  }, [hasMail, name, state.inputValue, validators])

  useEffect(() => {
    if (name === 'repeatPassword' && state.inputValue) {
      const isValid = validateString('repeatPassword', state.inputValue)

      setState(prev => ({...prev, advice: !isValid? 
      validators['repeatPassword'].message : '',}))
    }
  }, [sharedState?.password, name, state.inputValue, validateString, validators])

  useEffect(() => {
    if (showAdvice && name) {
      const isValid = name && validators[name as keyof typeof validators] 
      ? validateString(name as keyof typeof validators, state.inputValue) : true

      if (!isValid) setState(prev => ({...prev,
      advice: validators[name as keyof typeof validators]?.message || ''}))
    }
  }, [showAdvice, name, state.inputValue, validateString, validators])

  return (
    <Strong className={`${className} ${state.advice? 'advice' : ld? 'ld' : ''}`}>
      <label htmlFor={name} className={state.isFocused? 'act' : ''}>
      <span>{IconSvg && <IconSvg />} {state.advice || placeholder}</span></label>

      <input type={type} id={id} name={name} disabled={ld}
      placeholder={placeholder} aria-label={placeholder}
      
      autoComplete={autoComplete} 
      onFocus={() => setState(prev => ({ ...prev, isFocused: true }))}
      onBlur={handleBlur} onInput={handleInput} value={state.inputValue}/>

      {psw && <Visibility id={id || ''}/>}
    </Strong>
  )
}
