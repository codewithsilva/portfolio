import React from 'react'

import Header from './header/Header'
import Hero from './hero/Hero'

import { Life } from './interstellar/Life'
import { ZapBtn } from '../resources/BtnsAndOthers'
import { Ld } from '../resources/Defaults'

const Landing = () => {
  return (
    <><Header/> <Life/>
      <Hero/>

      <article className='whatsapp-scroll'>
      <span><ZapBtn anin={true}/></span></article>
    </>
  )
}

export default Landing
