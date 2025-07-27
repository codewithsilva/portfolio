import styled from "styled-components"

import { blur } from "@/style/defaults/button"

export const ModalStyles = styled.article`
  width:30rem;
  height:28rem;
  padding:1.15rem 1.5rem;
  overflow:hidden;
  border-radius:8rem 8rem 0 0;
  ${({theme})=>theme.shadow(theme.hexToRgba(theme.color.default, .3))}
  ${({theme})=>theme.flex.startCenterColumn}
  color:${({theme})=>theme.color.neutral};
  animation:from-bottom .3s linear forwards;

  &, a:after, ol.opts, ol.opts li.on {
    ${blur}
    position:relative;
  }
  &, ul {gap:1.25rem;}

  a, ul, ol.opts {
    ${({theme})=>theme.flex.center}
  }

  a, ul, div, form {width:100%;}
  a, ul svg, ol.opts li{cursor:pointer;}

  a:after {
    ${({theme})=>theme.defDoubleDot}
    position:relative;
    width:4rem;
    height:.4rem;
    background:${({theme})=>theme.hexToRgba(
    theme.color.default, .3)};
    border-radius:2rem;
  }

  ul svg {
    ${({theme})=>theme.sameSize(theme.rem(23))}
    fill:${({theme})=>theme.color.default};
  }

  ol {
    border:1px solid ${({theme})=>
    theme.hexToRgba(theme.color.default, .3)};
  }

  ol.opts {
    gap:.5rem;
    padding:.25rem .25rem;
    border-radius:2rem;

    li {
      font-size:.8rem;
      border-radius:1rem;
      padding:.25rem 1rem;
      border:1px solid transparent;
      ${({theme})=>theme.transition()}

      &.on {
        text-shadow:0 0 10px ${({theme})=>
        theme.color.default};
        border:1px solid ${({theme})=>
        theme.hexToRgba(theme.color.default, .3)};
      }
    }
  }

  @media (max-width:${({theme})=>theme.rem(530)}) {
    width:100dvw;
    border-radius:1rem 1rem 0 0;
    padding:1.15rem .5rem;
    box-shadow:none;

    ol.opts {
      gap:.15rem;

      li {font-size:.7rem;}
    }
  }

  @keyframes from-bottom {
    from {top:25rem;}
    to {top:0;}
  }
`
