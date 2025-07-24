import styled, { css } from 'styled-components'

import { appear, hideMenu } from '@/style/defaults/default'
import { device } from '@/style/defaults/tags'

import { menu } from './mobile'
import { blur } from '@/style/defaults/button'

export const HeaderCpt = styled.header`
  nav, ul:first-child, ol {
    ${({theme})=>theme.flex.space}
  }

  span, ol {position:relative;}

  span:not(button span) {
    font-size:1.4rem;
    top:.2rem;
  }

  ul {  
    ${({theme})=>theme.flex.center}
    gap:11.9rem;

    ol {
      gap:1rem;
      padding:0 .15rem;
      border-radius:.8rem;
      border:1px solid ${({theme})=>theme.hexToRgba(theme.color.default, .05)};
      ${appear({drc:'bottom', dur:.8, scl:true})}

      &, li:first-child {
        ${blur}
      }

      li {
        border-radius:.75rem;
        cursor:pointer;
        padding:.35rem .75rem;
        font-size:.8rem;
        letter-spacing:.05rem;
        color:${({theme})=>theme.color.white};

        &:first-child {
          position:absolute;
          z-index:-1;
          top:${({theme})=>theme.rem(1)};
          height:93%;
          ${({theme})=>theme.transition()}
        }

        &.act {
          text-shadow:0 0 10px ${({theme})=>theme.color.default};

          &:after {
            ${({theme})=>theme.defDoubleDot}
          
          }
        }
      }
    }
    
    button:nth-child(2) {
      font-size:.6rem;
      padding:.8rem .5rem .6rem 1.25rem;
      border-radius:1rem;
      box-shadow:0 0 1px ${({theme})=>theme.hexToRgba(theme.color.default, .1)};

      span {
        border-radius:.75rem;
        background:${({theme})=>theme.color.default};
        top:-.25rem;
        padding:.25rem;
        transform:scale(1) rotate(2deg);
    
        svg {
          opacity:.7;
          animation:none;
          ${({theme})=>theme.sameSize(theme.rem(17))}
        }
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
