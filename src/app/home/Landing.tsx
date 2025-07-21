import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import { Stars } from './interstellar/Stars'
import { Section } from './styled/styled'
import { Flame, Rocket } from 'lucide-react'

const Landing = () => {
  return (
    <>
      <Section>
        
        <article>
          <a href="https://github.com/codewithsilva"
          target="_blank" rel="noopener noreferrer">
            
          <i><DotLottieReact src={`${process.env.NEXT_PUBLIC_FLAME}`}
          renderConfig={{freezeOnOffscreen:true, autoResize:true}} loop autoplay
          style={{width:20, height:20}}/>New</i>
          my latest project! <Rocket/></a>

          <h1>Powering <span>Smooths</span> Projects 
          With Code</h1>

          <p>I'm <span>Wanderson Silva</span> • Fullstack AI Developer</p>
        </article>
      </Section>

      <Stars/>

      {/*  */}
    </>
  )
}

export default Landing
