import React from 'react'
import { Rocket } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import { Marquee } from '../../resources/Marquee'

import { Section } from './styled/styled'
import { Button } from '@/style/defaults/button'

import { Stars } from '../interstellar/Stars'
import { Img } from './styled/details'

const Hero = () => {
  return (
    <>
      <Section>
        <article>
          <a href="https://sushi-phi-three.vercel.app/"
          target="_blank" rel="noopener noreferrer">
            
          <i><DotLottieReact src={`${process.env.NEXT_PUBLIC_FLAME}`}
          renderConfig={{freezeOnOffscreen:true, autoResize:true}} loop autoplay
          style={{width:20, height:20}}/>New</i>
          <i>my latest project!</i> <Rocket/></a>

          <h1>Powering <Marquee words={['Smooth', 'Refine', 'Simple']}/> Projects With Code</h1>

          <p><span>Wanderson Silva</span> • Fullstack AI Developer</p> 

          <Button main={true}/>
        </article>
      </Section>

      <Img src="/svgs/moon.svg" alt="moon"/>
      <Stars/>
    </>
  )
}

export default Hero