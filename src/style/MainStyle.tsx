import { createGlobalStyle } from 'styled-components'

import { bare } from './defaults/bare'
import { mainForm } from './defaults/mainForm'

import { whatsappScroll } from './defaults/tags'
import { blur } from './defaults/button'
import { appear } from './defaults/default'

const MainStyle = createGlobalStyle`
  ${bare}

  header, header nav, main.landing article, 
  footer section, .whatsapp-scroll span {
    width:100dvw;
  }

  header nav, main.landing article, 
  footer section, .whatsapp-scroll span {
    width:100dvw;
    max-width:${({theme})=>theme.rem(1250)};
  }

  header {
    background:transparent;
    transition:background-color .3s ease, padding .3s ease;
    ${({theme})=>theme.fixed}
    padding:1rem 0;
    z-index:3;
    ${({theme})=>theme.flex.center}

    &.scroll {
      padding:${({theme})=>`${theme.rem(10)} ${theme.rem(24)}`};
    }
  }

  section {overflow:hidden;}

  #modal-root:has(.act) {
    ${appear({opacityOnly:true})}
    ${({theme})=>theme.screen}
    ${({theme})=>theme.flex.centerEnd}
    ${blur}
  }

  @media(max-width:${({theme})=>theme.rem(1150)}),
  (max-height:${({theme})=>theme.rem(550)}) {
    header {
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
