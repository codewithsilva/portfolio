import styled from "styled-components"
import { ploc } from "@/style/defaults/default"

export const Section = styled.section`
  position:relative;
  ${({theme})=>theme.size('100dvw', '100dvh')};
  background:${({theme})=>theme.color.neutral};

  &, article:last-child {
    ${({theme})=>theme.flex.column}
  }

  a, a i, h1, p span {
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
  }

  canvas, h1, span, a i, p {position:relative;}
  p, h1 {color:${({theme})=>theme.color.default};}

  a {
    gap:.5rem;
    background:${({theme})=>theme.hexToRgba(theme.color.accent, .1)};
    border-radius:1rem;
    z-index:1;
    border:1px solid transparent;
    ${({theme})=>theme.shadow(theme.hexToRgba(theme.color.accent, .3))};

    &:hover {
      ${({theme})=>theme.shadow(theme.hexToRgba(theme.color.accent, .4))};

      svg {
        transform:scale(1.2) rotate(10deg);
      }
    }

    &, i {font-size:.8rem}

    &, svg {
      ${({theme})=>theme.transition('.4s', 'ease')};
    }

    svg {
      ${ploc}
    }

    &, i {
      ${({theme})=>theme.flex.center};
    }

    i {
      background:${({theme})=>theme.hexToRgba(theme.color.accent, .2)};
      backdrop-filter:blur(2px);
      padding:.2rem .75rem .2rem .25rem;
      border-radius:1rem;

      canvas {
        position:absolute;
        top:-.4rem;
        left:-1.25rem;
      }
    }
  }

  h1 {
    line-height:${({theme})=>theme.rem(70)};
    font-size:3.5rem;
    font-weight:500;
    padding-top:-2rem;
    letter-spacing:.2rem;
    top:-2rem;

    span {
      font-size:5.5rem;
      width:29rem;
      overflow:hidden;
      top:2.1rem;
      padding:2rem 0 1.5rem 0;
    }
  }

  p {
    font-size:1.25rem;
    top:-.5rem;
    font-weight:500;

    &, span {
      ${({theme})=>theme.gradientText('rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, .5)')}
    }
  }
`