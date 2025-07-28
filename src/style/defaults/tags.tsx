import { css } from 'styled-components'
import { appear } from './default'
import { blur } from './button'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const device = (styles:any) => css`
  @media (max-width: ${({theme})=>theme.rem(1300)}),
         (max-height:${({theme})=>theme.rem(550)}) {
    ${styles}
  }
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mobile = (styles: any, 
width: number=768, height: number=550) => css`
  @media (max-width: ${({theme}) => theme.rem(width)}),
         (max-height: ${({theme}) => theme.rem(height)}) {
    ${styles}
  }
`

export const whatsappScroll = css`
  .whatsapp-scroll {
    position:fixed;
    bottom:3rem;
    width:90dvw;
    &, span {pointer-events:none;}

    &, span a {
      ${({theme})=>theme.flex.center}
    }

    span {
      padding:0;
      height:20dvh;
      ${({theme})=>theme.flex.endColumnStart}
      ${appear({drc:"right", dur:1.1, scl:true})}

      a {
        pointer-events:auto;
        cursor:pointer;
        border-radius:50%;
      }
    }
  }
`

export const radial = css`
  animation:aninRadial 30s linear infinite;
  background-size:100% 100%;
  background-repeat:no-repeat;

  @keyframes aninRadial {  
    0%, 100% {
      background: radial-gradient(
        ellipse at 50% 130%,
        ${({theme})=>theme.color.primary} 0%,
        ${({theme})=>theme.color.secondary} 20%,
          
        ${({theme})=>theme.color.neutral} 70%,
        ${({theme})=>theme.color.erieBlack} 100%
      );    
    }

    25% {background: radial-gradient(ellipse at 50% 130%,
    #3f00ff 0%, #6e00ff 20%,#101010 70%,#000000 100%);}
  
    50% {background: radial-gradient(ellipse at 50% 130%,
    #ffae00 0%, #ff6a00 25%, #2b1a08 70%, #0b0b0b 100%);}

    75% {background: radial-gradient(ellipse at 50% 130%,
    #f26a1b 0%, #ab3e16 20%, #1f1a1a 70%, #0a0a0a 100%);}
  }
`
