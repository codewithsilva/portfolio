import styled from 'styled-components'
import { appear, twerk } from '@/style/defaults/default'

export const Section = styled.section`
  height:100dvh;
  overflow:hidden;
  gap:2.5rem;

  &, article {
    ${({theme})=>theme.flex.center}
    flex-direction:column;
  }

  article {
    overflow:visible;
    height:max-content;
    width:100dvw;
    clip-path:none;
    background:none;
    position:relative;

    img {
      ${({theme})=>theme.size(theme.rem(210),'auto')}
      ${appear({drc:'bottom', dur:.3, scl:true })}
    }

    &:after {
      content:'Monitoramento e Rastreamento Veicular';
      position:absolute;
      bottom:-1.6rem;
      width:0;
      overflow:hidden;
      white-space:nowrap;
      border-right:2px solid white;
      animation:typing .7s linear forwards;
      color:${({theme})=>theme.hexToRgba(theme.color.textCl, .8)};
      font-weight:500;
      letter-spacing:.1rem;
      font-size:.8rem;
    }

    @keyframes typing {
      from {width:0;}
      to {width:16.5rem;}
    }
  }

  form {
    ${appear({drc:'top'})}
    ${({theme})=>theme.size('100dvw', 'auto')}
    padding:0 1rem;
    gap:1.5rem;
    width:100dvw;
    ${({theme})=>theme.flex.column}

    &.twerk {
      ${twerk}
    }

    a.goback {
      width:100%;
      opacity:.3;
      position:relative;
      top:-8rem;
      ${({theme})=>theme.flex.startCenter}

      &.off {
        pointer-events:none;
        cursor:auto;
      }
    }

    fieldset {
      color:${({theme})=>theme.hexToRgba(theme.color.textCl, .2)};
      width:100%;

      &, p, a {
        ${({theme})=>theme.flex.space}
        gap:.5rem;

        svg {
          opacity:.2;
          fill:${({theme})=>theme.color.strongPurple};
        }
      }

      a:not(p a) {
        text-decoration:none;
        font-size:.8rem;
        opacity:.8;
        font-style:italic;
        color:${({theme})=>theme.hexToRgba(theme.color.textCl, .6)};

        svg {
          opacity:.2;
        }
      }
    }

    &.signup fieldset {
      gap:.25rem;
      ${({theme})=>theme.flex.center}
    }

    button, fieldset, a.goback {
      max-width:${({theme})=>theme.rem(450)};
    }

    button {
      font-size:1.1rem;

      &:after {
        opacity:.1;
        filter:blur(0);
      }
    }
  }
`
