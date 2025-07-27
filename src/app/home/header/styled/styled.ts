import styled, { css } from 'styled-components'

import { appear, hideMenu } from '@/style/defaults/default'
import { device } from '@/style/defaults/tags'

import { menu } from './mobile'
import { blur } from '@/style/defaults/button'

export const HeaderCpt = styled.header`
  nav, ul:first-child, ol {
    ${({theme})=>theme.flex.space}
  }

  span, ol, ol li {position:relative;}

  span:not(button span) {
    font-size:1.4rem;
    top:.2rem;
    ${appear({drc:'left', dur:.7, scl:true})}
  }

  ul {  
    gap:13rem;

    &, ol ul li {
      ${({theme})=>theme.flex.center}
    }

    ol {
      gap:1rem;
      padding:0 .15rem;
      border-radius:.8rem;
      border:1px solid ${({theme})=>theme.hexToRgba(theme.color.default, .05)};
      ${appear({drc:'bottom', dur:.8, scl:true})}

      &, i {
        ${blur}
      }

      i, li {border-radius:.75rem;}

      i {
        position:absolute;
        z-index:-1;
        top:${({theme})=>theme.rem(1)};
        height:93%;
        pointer-events:none;
        ${({theme})=>theme.transition()}
      }

      li {
        cursor:pointer;
        padding:.35rem .75rem;
        font-size:.8rem;
        letter-spacing:.05rem;
        color:${({theme})=>theme.color.white};

        &.act {
          text-shadow:0 0 10px ${({theme})=>theme.color.default};

          &:after {
            ${({theme})=>theme.defDoubleDot}
            ${({theme})=>theme.screenContainer}
            ${blur}
            background:${({theme})=>theme.hexToRgba(theme.color.default, .3)};
            left:25%;
            top:-.35rem;
            width:50%;
            opacity:1;
            height:.3rem;
            border-radius:1rem 1rem .25rem .25rem;
            z-index:10;
            animation:detail .2s linear forwards;
          }

          @keyframes detail {
            from {width:0%;}
            to {width:50%;}
          }
        }
      }
    }
    
    button:nth-child(2) {
      font-size:.6rem;
      padding:.8rem .5rem .6rem 1.25rem;
      box-shadow:0 0 1px ${({theme})=>theme.hexToRgba(theme.color.default, .1)};
      ${appear({drc:'right', dur:.7, scl:true})}

      span {
        border-radius:.75rem;
        background:${({theme})=>theme.color.default};
        top:-.25rem;
        padding:.25rem;
    
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
