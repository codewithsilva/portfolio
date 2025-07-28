import React from 'react'
import { useGlobalCtx } from '../context/Global'

import { Life } from './interstellar/Life'

import Header from './header/Header'
import Hero from './hero/Hero'

import { ZapBtn } from '../resources/BtnsAndOthers'
import { Ld } from '../resources/Defaults'

const Landing = () => {
  const {ld} = useGlobalCtx()
    
  return (
    <><Header/> <Life/>
      <Hero/>

      

      <article className='whatsapp-scroll'>
      <span><ZapBtn anin={true}/></span></article>
      {ld && <Ld/>}
    </>
  )
}

export default Landing
