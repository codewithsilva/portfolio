import { css } from 'styled-components'

import { appear, appearMenu } from '@/assets/style/defaults/default'

export const menu = () => css`
  ul:first-child img {
    top:0;
    left:0;
  }

  ul:first-child.act {
    &:before {
      ${({theme})=>theme.screen}
      z-index:-1;
      background:${({theme})=>theme.hexToRgba(
      theme.color.strongPurple,.5)};
      backdrop-filter:blur(3px);
      opacity:1;
    }

    ol {
      position:fixed;
      ${({theme})=>theme.flex.column}
      z-index:5;
      ${({theme})=>theme.fixed}
      background:${({theme})=>theme.color.strongPurple};
      width:100dvw;
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
        background:${({theme})=>theme.color.white};
      }

      li {
        font-size:.9rem;
        opacity:.5;
        ${({theme})=>theme.transition('.2s','ease-out')}

        &.act, &.initial {
          opacity:1;
          transform:scale(1.2);
          ${({theme})=>theme.transition('.1s','ease-in')}

          &:after {
            display:none;
          }
        }
      }
    }
  }

  ul:last-child {
    ${({theme})=>theme.flex.center}
    gap:.75rem;

    button:first-child {
      left:0;
      font-size:.65rem;
      top:0;
      ${appear({drc:"left", dur:.7, scl:true})}
      padding:${({theme}) => 
      `${theme.rem(8)} ${theme.rem(16)}`};

      svg {
        ${({theme})=>theme.sameSize(theme.rem(18))}
      }
    }

    button:nth-child(2) {
      padding:${({theme}) => 
      `${theme.rem(8)} ${theme.rem(12)}`};

      svg {
        ${({theme})=>theme.sameSize(theme.rem(18))}
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
        background:${({theme})=>theme.color.white};
        border-radius:.25rem;

        &:nth-child(2) {
          ${({theme})=>theme.size(
          theme.rem(16), theme.rem(2))}
        }

        &:nth-child(3) {
          ${({theme})=>theme.size(
          theme.rem(12), theme.rem(2))}
        }
      }
    }
  }
`
