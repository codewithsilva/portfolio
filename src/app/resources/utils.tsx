import validarCpf from 'validar-cpf'
import { DateTime } from 'luxon'

type FormatType = | 'capFirst' | 'firstWord' | 'upperCase' | 'name' | 'firstWordLimited'
| 'lowerCase' | 'firstWordUpper' | 'firstWordLower' | 'firstWordCapitalized'

const formatName = (value:string): string => {
  return value.toLowerCase().split(' ').map
  (word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
},

phrase = (msg:string | undefined, type?:FormatType):string => {
  if (!msg) return ''

  const trimmed = msg.trim().replace(/\s+/g, ' '),
  firstWord = trimmed.split(' ')[0],

  capitalize = (word:string) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),

  strategies:Record<FormatType, () => string> = {
    capFirst:() => capitalize(trimmed),
    firstWordCapitalized:() => capitalize(firstWord),

    firstWord:() => firstWord,
    upperCase:() => trimmed.toUpperCase(),
    lowerCase:() => trimmed.toLowerCase(),

    firstWordUpper:() => firstWord.toUpperCase(),
    firstWordLower:() => firstWord.toLowerCase(),

    name:() => trimmed.split(' ').map(capitalize).join(' '),
    firstWordLimited:() => firstWord.slice(0, 13)
  }

  return strategies[type?? 'capFirst']?.()?? capitalize(firstWord)
},

formatTime = (seconds:number) => {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0"),
  secs = (seconds % 60).toString().padStart(2, "0")
  
  return `${minutes}:${secs}`
},

getEnv = (name:string):string => {
  const value = process.env[name]
  if (!value) throw new Error(`not defined`)
  return value
},

comma = (input:string, reverse?:boolean):string => {
  if (reverse) {return input.replace(/\./g, ',')}

  return input.replace(/,/g, '.')
},

regexCpf = (input:string) => {
  const cpf = input.replace(/\D/g, '')

  if (cpf.length === 11 && validarCpf(cpf)) {return cpf}
},

greeting = ():string => {
  const hora = DateTime.now().setZone('America/Sao_Paulo').hour

  if (hora >= 5 && hora < 12) return 'Bom dia'
  if (hora >= 12 && hora < 18) return 'Boa tarde'
  return 'Boa noite'
}

export {formatName, formatTime, getEnv, phrase, comma, regexCpf, greeting}
