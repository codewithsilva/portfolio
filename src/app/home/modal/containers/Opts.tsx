import React, { useState } from 'react'
import { opts } from '../resources/data'
import { Containers } from './Containers';

const Opts = () => {
  const [act, setAct] = useState(0),

  content = [<Containers type='contact'/>,
  <Containers type='resume'/>,

  <form key="form">✉️ Preencha o formulário de contato</form>]    
  
  return (
    <><ol className='opts'>
      {opts.map((item, index)=>
      <li key={index} 
      className={act === index? 'on' : ''}
      onClick={()=>setAct(index)}>
      {item}</li>)}
    </ol>

    {content[act]}</>
  )
}

export default Opts
