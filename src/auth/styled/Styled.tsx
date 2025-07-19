import styled from 'styled-components'

import { Details } from './Details'
import { grid } from '@/style/defaults/default'

export const Strong = styled.strong`
  ${grid}

  &.ld input::selection {
    background:transparent;
    color:inherit;
  }

  &.name label {
    span svg {
      ${({theme})=>theme.sameSize('1.1rem')}
    
      path {fill:${({theme})=>theme.color.strongPurple}}
    }

    &.act span svg {
      ${({theme})=>theme.sameSize('1rem')}
    }
  }

  &, input, label {
    width:100%;
    background:none;
    max-width:${({theme})=>theme.rem(450)};
  }

  input, label, i {grid-area:1/1;}
  input, label {padding:1.25rem 0;}
  label span, input {font-size:1rem;}

  label {
    z-index:2;
    font-weight:500;

    &, span {position:relative;}
    &, span, svg {
      pointer-events:none;
      ${({theme})=>theme.transition('.3s', 'ease-out')}
    }

    span {
      ${({theme})=>theme.flex.startCenter}
      gap:.25rem;
      top:0;
      color:${({theme})=>theme.hexToRgba(
      theme.color.textCl, .5)};
    }
    svg {opacity:.8;}

    &:after {
      ${({theme})=>theme.defDoubleDot}
      bottom:-.2rem;
      right:0;
      border-bottom:1.5px solid 
      ${({theme})=>theme.color.textCl};
    }

    &.act {
      &, span, svg {
        ${({theme})=>theme.transition('.3s', 'ease-in')}
      }

      span {
        top:-1.6rem;
        font-size:.8rem;
        gap:.15rem;
      }

      svg {
        ${({theme})=>theme.sameSize('1rem')}
      }
      &:after {animation:grow-right .3s linear forwards;}

      @keyframes grow-right {
        0%{width:0%;}
        100%{width:100%;}
      }
    }
  }

  input {
    border-bottom:1px solid 
    ${({theme})=>theme.hexToRgba(
    theme.color.erieBlack, .7)};
    &::placeholder {opacity:0;}
    color:${({theme})=>theme.color.textCl};
  }

  i {
    justify-self:end;
    padding:.5rem;
    cursor:pointer;
    opacity:.3;
    ${({theme})=>theme.flex.center}
    ${({theme})=>theme.transition('.2s', 'ease-out')}

    &.act {
      opacity:1;
      ${({theme})=>theme.transition('.2s', 'ease-in')}
    }
  }

  ${Details}
`
