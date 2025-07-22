import { css } from 'styled-components'
import { appear } from './default'

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
    width:100dvw;
    &, span {pointer-events:none;}

    &, span a {
      ${({theme})=>theme.flex.center}
    }

    &.adm span {
      gap:2rem;
      min-height:13rem;
      height:auto;
      padding:0;
      position:relative;
      left:2.5rem;

      a:nth-child(1), a:nth-child(2) {
        padding:.5rem;
        background:${({theme})=>theme.color.primary};
        box-shadow:0px 0px 15px ${({theme})=>theme.color.primary};

        svg {stroke:${({theme})=>theme.color.secondary}}
      }
    }

    &:not(&.adm) span a:nth-child(2), 
    &.adm span a:nth-child(3) {
      background:${({theme})=>theme.hexToRgba(
      theme.color.primary,.3)};
      padding:.45rem;
      ${({theme})=>theme.shadow(theme.hexToRgba(
      theme.color.primary,.1))}

      ${appear({drc:"bottom", dur:.3, scl:true})}
      svg {opacity:.8;}
    }

    span {
      padding:0;
      gap:3rem;
      height:10rem;
      ${({theme})=>theme.flex.endColumnStart}
      ${appear({drc:"right", dur:1.1, scl:true})}

      a {
        pointer-events:auto;
        cursor:pointer;
        border-radius:50%;
      }

      ${device(`padding:0 1rem;`)}
    }
  }
`
