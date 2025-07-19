import styled, { css } from 'styled-components'

import { appear, hideMenu } from '@/assets/style/defaults/default'
import { device } from '@/assets/style/defaults/tags'
import { menu } from './Mobile'

export const Header = styled.header`
  padding:${({theme})=>`${theme.rem(20)} ${theme.rem(10)}`};

  nav, ul:first-child, ol {
    ${({theme})=>theme.flex.space}
  }

  ul:first-child {
    gap:3rem;

    &:before {
      ${({theme})=>theme.defDoubleDot}
      transition:opacity .2s ease;
      opacity:0;
    }

    img, li {cursor:pointer}

    img {
      ${({theme})=>theme.size(
      theme.rem(115), 'auto')}
      position:relative;
      top:${({theme})=>theme.rem(-5)};
      left:${({theme})=>theme.rem(-45)};
      ${appear({drc:"right", dur:.7, scl:true})}
    }

    ol {
      gap:2.5rem;
      ${appear({drc:"left", dur:.8, scl:true})}
    }

    li {
      font-size:.8rem;
      padding:${({theme}) => 
      `${theme.rem(8)} ${theme.rem(0)}`};
      letter-spacing:.05rem;
      position:relative;
      overflow:hidden;
      color:${({theme})=>theme.color.white};

      &:after {
        ${({theme})=>theme.defDoubleDot}
        bottom:0;
        right:-1rem;
        background:${({theme})=>theme.color.white};
        ${({theme})=>theme.size(
        theme.rem(16), theme.rem(1.75))}
        transition:right .3s ease;
      }

      &.act:after {right:.09rem;} 
    }
  }

  ul:last-child {
    gap:0;

    &, button:first-child, button:nth-child(2) {
      ${({theme})=>theme.flex.center}
      position:relative;
    }

    button:first-child, button:nth-child(2) {
      font-size:${({theme})=>theme.rem(12)};
      font-family:'Poppins', sans-serif;
      top:${({theme})=>theme.rem(-5)};
      left:${({theme})=>theme.rem(-25)};
      border-radius:.5rem;
      gap:.35rem;
      font-weight:600;
      ${appear({drc:"top", dur:.7, scl:true})}
      color:${({theme})=>theme.color.strongPurple};
      letter-spacing:.1rem;
      padding:${({theme})=>theme.rem(8)} ${({theme})=>theme.rem(18)};
    }

    button svg {
      ${({theme})=>theme.sameSize(theme.rem(22))};

      stop:first-child {
        stop-color:${({theme})=>theme.color.purple};
      }

      stop:last-child {
        stop-color:${({theme})=>theme.color.strongPurple};
      }
    }

    button:nth-child(2) {
      left:0;
      padding:${({theme})=>theme.rem(9)} ${({theme})=>theme.rem(18)};

      svg {
        ${({theme})=>theme.sameSize(theme.rem(21))}
        stroke:${({theme})=>theme.hexToRgba(theme.color.strongPurple, 1)};
      }
    }

    button:last-child {display:none;}
  }

  ${device(css`
    ul:first-child {
      ${({theme}) => theme.size(
      theme.rem(80), 'auto')}

      ol {display:none;}

      &.act.closing ol {
        ${hideMenu}
      }
    }
    
    ${menu}
  `)}
`
