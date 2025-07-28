import { css } from 'styled-components'

import { appear, appearMenu } from '@/style/defaults/default'
import { blur } from '@/style/defaults/button'

export const mobile = () => css`
  span {font-size:1rem}

  ul {
    gap:.75rem;
    position:relative;
    ol {display:none}

    &.act {
      &:before, ol {
        ${blur}
      }

      &:before {
        ${({theme})=>theme.defDoubleDot}
        ${({theme})=>theme.screen}
        z-index:-1;
        opacity:1;
        background:${({theme})=>
        theme.hexToRgba(theme.color.neutral, .3)};
      }

      ol {
        position:fixed;
        background:${({theme})=>
        theme.hexToRgba(theme.color.neutral, .6)};
        ${({theme})=>theme.flex.column}
        z-index:5;
        ${({theme})=>theme.fixed}
        width:100dvw;
        border-radius:0 0 5rem 5rem;
        gap:1rem;
        padding:1.25rem 1.25rem 2rem 1.25rem;
        ${appearMenu}

        &:after {
          ${({theme})=>theme.defDoubleDot}
          ${({theme})=>theme.size(
          theme.rem(27), theme.rem(5))}
          border-radius:.75rem;
          opacity:.5;
          pointer-events:none;
          bottom:-1.5rem;
          background:${({theme})=>theme.color.default};
        }

        li {
          font-size:.9rem;  
          opacity:.5;
          ${({theme})=>theme.transition('.2s','ease-out')}

          &.act, &.initial {
            opacity:1;
            transform:scale(1.2);
            ${({theme})=>theme.transition('.1s','ease-in')}

            &:after {display:none;}
          }
        }
      }
    }

    button:nth-child(2) {
      font-size:.6rem;
      ${appear({drc:"left", dur:.7, scl:true})}
      padding:.4rem .3rem .3rem .75rem;
      border-radius:1rem;

      span {
        top:-.15rem;
        left:-.2rem;

        svg {
          ${({theme})=>theme.sameSize(theme.rem(15))}
        }
      }
    }

    button:last-child {
      ${({theme})=>theme.flex.endColumn}
      ${appear({drc:"right", dur:.4, scl:true})}
      gap:.4rem;
      padding:${({theme}) => 
      `${theme.rem(9)} ${theme.rem(0)}`};
      cursor:pointer;
      
      span {
        ${({theme})=>theme.size(
        theme.rem(22), theme.rem(2))}
        background:${({theme})=>theme.color.default};
        border-radius:.25rem;

        &:nth-child(2) {
          ${({theme})=>theme.size(
          theme.rem(16), theme.rem(2))}
        }

        &:nth-child(1) {
          ${({theme})=>theme.size(
          theme.rem(12), theme.rem(2))}
        }
      }
    }
  }
`
