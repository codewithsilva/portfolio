import styled from 'styled-components'

import { blur, status } from '@/style/defaults/button'
import { appear } from '@/style/defaults/default'

export const SocialsCtn = styled.div`
  ${({theme})=>theme.flex.column}
  gap:1rem;

  nav, span, p, button, li {width:100%;}
  nav, p, nav ol li:last-child, button {
    ${({theme})=>theme.flex.center}
  }

  nav {
    gap:.5rem;
    ${appear({drc:'right', dur:.2, scl:true})}
    
    ol, li:first-child {border-radius:1rem;}
    
    ol {
      cursor:pointer;
      ${blur}
      ${({theme})=>theme.flex.startColumn}
      gap:.5rem;
      width:50%;
      height:7rem;
      background:${({theme})=>theme.hexToRgba(
      theme.color.neutral, .6)};
    }

    li, button {
      padding:.5rem;
      padding-left:1rem;
      gap:.5rem;
    }

    li:first-child {
      overflow:hidden;
      height:3.5rem;
      position:relative;
      ${({theme})=>theme.flex.startCenter}
      border-bottom:1px solid ${({theme})=>
      theme.hexToRgba(theme.color.default, .3)};
      ${({theme})=>theme.gradient(theme.color.white, '')}

      &:after, svg {border-radius:2rem;}

      &:after {
        ${({theme})=>theme.defDoubleDot}
        position:absolute;
        top:.6rem;
        left:.7rem;
        ${({theme})=>theme.sameSize(theme.rem(33))}
        z-index:-1;
        background:${({theme})=>theme.color.default};
      }
    }

    li:last-child {text-decoration:underline}
  }

  p:not(nav ol p) {
    font-size:.8rem;
    text-align:center;
    position:relative;  
    ${status}
  }

  @media (max-width:${({theme})=>theme.rem(530)}) {
    nav li:last-child, nav button {font-size:.6rem}
  }
`
