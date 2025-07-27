import React from 'react'

import { Life } from './interstellar/Life'

import Header from './header/Header'
import Hero from './hero/Hero'

import { ZapBtn } from '../resources/BtnsAndOthers'

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
