import React from 'react'
import { useGlobalCtx } from '../context/Global'

import Header from './header/Header'
import Hero from './hero/Hero'

import { Life } from './interstellar/Life'
import Modal from './modal/Modal'

import { ZapBtn } from '../resources/BtnsAndOthers'

const Landing = () => {
  const {modal} = useGlobalCtx()

  return (
    <><Header/> <Life/>
      <Hero/>

      <article className='whatsapp-scroll'>
      <span><ZapBtn anin={true}/></span></article>

      {modal && <Modal/>}
    </>
  )
}

export default Landing
