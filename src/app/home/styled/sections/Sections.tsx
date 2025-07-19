import styled from 'styled-components'

import { vibeSections } from './VibeSections'
import { mobile } from './Mobile'

import { appear, neuralBg } from '@/assets/style/defaults/default'

export const Main = styled.main`
  ${({theme})=>theme.flex.column}

  section {
    width:100dvw;
    height:107dvh;
    min-height:${({theme})=>theme.rem(600)};
    max-height:${({theme})=>theme.rem(780)};
    position:relative;
    padding:${({theme}) => 
    `${theme.rem(20)} ${theme.rem(24)}`};
    ${({theme})=>theme.flex.center}

    & {
      h1, h2, &:nth-child(2) span, 
      p, button, img {opacity:0;}

      &:first-child, &.act {
        h1, h2 {
          ${appear({drc:"bottom", scl:true})}
        }

        p, &:nth-child(2) span {
          ${appear({drc:"bottom", dur:1.1, scl:true})}
        }

        button {
          ${appear({drc:"bottom", dur:1.2, scl:true})}
        }

        img {
          ${appear({drc:"right", dur:.7, scl:true})}
        }
      }
    }

    &:nth-child(1) {clip-path:polygon(0 0, 100% 0, 100% 94%, 50% 100%, 0 94%);}

    &:first-child, &:nth-child(5) {
      background:${({theme})=>theme.color.strongPurple};

      &:before {
        ${neuralBg} 
      }
      h1 {color:${({theme})=>theme.color.white};}
      p {color:${({theme})=>theme.color.platinum};}
    }

    &:nth-child(2), &:nth-child(5) {
      height:auto;
      min-height:auto;
      padding:5rem 2rem;

      &, span {
        ${({theme})=>theme.flex.column}
      }
      p {text-align:center;}
    }

    &:nth-child(5) {
      min-height:${({theme})=>theme.rem(300)};

      p:not(article p) {
        ${({theme})=>theme.flex.center}
        gap:1rem;
        background:${({theme})=>theme.color.white};
        padding:.5rem 1.5rem;
        border-radius:2rem;

        a {cursor:pointer;}
      }
          
      img {
        ${({theme})=>theme.size(theme.rem(115), 'auto')}
      }

      &:before {
        background:${({theme})=>theme.color.purple};
      }
    }
    
    article {gap:0rem;}

    span {
      ${({theme})=>theme.flex.startColumnSpace}
      gap:3rem;
    }

    h1 {
      color:${({theme})=>theme.color.purple};
      font-size:2rem;
      line-height:${({theme})=>theme.rem(63)};
    }

    button {
      color:${({theme})=>theme.color.strongPurple};
    }

    img {
      ${({theme})=>theme.size(theme.rem(680), 'auto')}
    }
  }
  ${vibeSections}
  ${mobile}`
