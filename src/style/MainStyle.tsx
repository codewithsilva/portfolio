import { createGlobalStyle } from 'styled-components'

import { bare } from './defaults/bare'
import { mainForm } from './defaults/mainForm'

import { whatsappScroll } from './defaults/tags'

const MainStyle = createGlobalStyle`
  ${bare}

  header:not(header.ctn) nav, 
  main.landing article, footer section, .whatsapp-scroll span {
    width:100dvw;
    max-width:${({theme})=>theme.rem(1180)};
  }

  header {
    background:transparent;
    transition:background-color .3s ease, padding .3s ease;
    
    &:not(header.ctn) {
      ${({theme})=>theme.fixed}
      width:100dvw;
      z-index:3;
      ${({theme})=>theme.flex.center}

      &.scroll {
        backdrop-filter:blur(10px);
        background:${({theme})=>theme.hexToRgba(
        theme.color.secondary,.8)};
        padding:${({theme}) => 
        `${theme.rem(1)} ${theme.rem(24)}`};
        ${({theme})=>theme.shadow(theme.hexToRgba(theme.color.primary, .3))}
      }
    }
  }

  section {overflow:hidden}

  @media(max-width:${({theme})=>theme.rem(1150)}),
  (max-height:${({theme})=>theme.rem(550)}) {
    header:not(header.ctn) {
      padding:${({theme})=>`${theme.rem(10)} ${theme.rem(16)}`};

      &.scroll {
        padding:${({theme})=>`${theme.rem(5)} ${theme.rem(16)}`};
      }
    }
  }

  ${mainForm}
  ${whatsappScroll}
`

export default MainStyle
