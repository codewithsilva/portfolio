import { css } from 'styled-components'
import { device } from '@/assets/style/defaults/tags'
import { appear } from '@/assets/style/defaults/default'

export const mobile = () => css`
  ${device(css`
    section {
      &:not(&:first-child) {max-height:max-content;}
      &:not(&:first-child):not(&:nth-child(4))
      :not(&:nth-child(8)) {
        article {
          ${({theme})=>theme.flex.column}
          
          p{text-align:center;}
        }
      }

      &.act img {
        ${appear({drc:"right", dur:.7, scl:true, rel:false})}
      }

      &, &:first-child {
        span {gap:1rem;}

        h1 {
          font-size:1.7rem;
          line-height:${({theme})=>theme.rem(33)};
        }
      }

      &:first-child {
        img {display:none;}

        h1 {
          width:${({theme})=>theme.rem(290)};
        }

        span {
          ${({theme})=>theme.flex.center}
        }

        h1, p {text-align:center;}

        p {
          width:${({theme})=>theme.rem(310)};
          
          &:nth-child(2) {display:none;}
          &:nth-child(3) {display:block;} 
        }
      }

      &:nth-child(2) {
        gap:1rem;

        article {
          ${({theme})=>theme.flex.column}
          gap:3rem;
        }
      }

      &:nth-child(5) {
        padding:3rem;
        gap:1.5rem;

        article { 
          gap:.5rem;

          p {max-width:18rem;}
        }

        p:not(article p) img {
          position:relative;
          bottom:0;
          filter:opacity(100%);
          z-index:0;
        }
      }
      &:nth-child(8) img {display:none}

      img {
        position:absolute;
        left:0;
        bottom:1rem;
        filter:opacity(10%);
        z-index:-1;
      }

      h2 {font-size:1rem;}
      p {font-size:.9rem;}

      button {
        font-size:.9rem;
        padding:${({theme}) => 
        `${theme.rem(9)} ${theme.rem(27)}`};
      }
    }
  `)
  }
`