import styled from "styled-components"
import { appear, ploc, radial, scanner } from "@/style/defaults/default"

export const Section = styled.section`
  position:relative;
  ${({theme})=>theme.size('100dvw', '100dvh')};
  ${radial}

  &, article:last-child {
    ${({theme})=>theme.flex.column}
  }

  a, a i:first-child, h1, p span {
    text-shadow:0 0 3px ${({theme})=>theme.color.default};
  }

  span:not(p span) {
    text-shadow:0 0 7px ${({theme})=>theme.color.default};
  }

  article:last-child {
    z-index:1;
    width:${({theme})=>theme.rem(800)};
    text-align:center;
    gap:.25rem;
    ${appear({drc:'bottom', dur:.7, scl:true})}
  }

  canvas, h1, span, a i:first-child, 
  p, bdo {position:relative;}
  p, h1 {color:${({theme})=>theme.color.default};}

  a {
    ${appear({drc:'top', dur:.7, scl:true})}
    background:${({theme})=>theme.hexToRgba(theme.color.accent, .1)};
    border-radius:1rem;
    z-index:1;
    border:1px solid transparent;
    ${({theme})=>theme.shadow(theme.hexToRgba(theme.color.accent, .3))};

    &:hover {
      ${({theme})=>theme.shadow(theme.hexToRgba(theme.color.accent, .4))};

      svg {transform:scale(1.2) rotate(10deg)}
    }

    i {
      font-size:.8rem;

      &:nth-child(2) {
        ${scanner}
        border-radius:.25rem;
        padding:0 .5rem;
      }
    }

    &, svg {
      ${({theme})=>theme.transition('.4s', 'ease')};
    }

    svg {
      ${ploc}
    }

    &, i:first-child {
      ${({theme})=>theme.flex.center};
    }

    i:first-child {
      background:${({theme})=>theme.hexToRgba(theme.color.accent, .2)};
      backdrop-filter:blur(2px);
      padding:.2rem .75rem .2rem .25rem;
      border-radius:1rem;
      z-index:2;

      canvas {
        position:absolute;
        top:-.4rem;
        left:-1.25rem;
      }
    }
  }

  h1 {
    line-height:${({theme})=>theme.rem(80)};
    font-size:3.5rem;
    font-weight:600;
    padding-top:-2rem;
    letter-spacing:.2rem;
    top:-2rem;
  }

  p {
    font-size:1.25rem;
    top:0rem;
    font-weight:500;

    &, span {
      ${({theme})=>theme.gradientText(theme.color.default, 
      theme.hexToRgba(theme.color.default, .1))};
    }
  }
`