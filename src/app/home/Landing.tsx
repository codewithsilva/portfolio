import React from 'react'

import { ArrowRight, Rocket } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import { Stars } from './interstellar/Stars'
import { Marquee } from '../resources/Marquee'

import { Section } from './styled/styled'
import { Button } from '@/style/defaults/button'

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
          <i>my latest project!</i> <Rocket/></a>

          <h1>Powering <bdo><Marquee words={['Smooth', 'Refine', 'Simple']}/>
          </bdo> Projects With Code</h1>

          <p><span>Wanderson Silva</span> • Fullstack AI Developer</p>

          <Button main={true}/>
        </article>  
      </Section>

      <Stars/>

      {/*  */}
    </>
  )
}

export default Landing
