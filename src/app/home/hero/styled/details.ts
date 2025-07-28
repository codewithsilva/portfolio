import styled, { css } from "styled-components"
import { rotate } from "@/style/defaults/default"
import { device } from "@/style/defaults/tags"

const mobileImg = css`
  position:fixed;
  width:50dvw;
`

export const Img = styled.img`
  position:absolute;
  top:43dvh;
  right:-10dvw;
  z-index:-1;
  opacity:.1;
  width:60dvw;
  ${rotate('90s')}
  ${device(css`${mobileImg}`)}
`

export const mobile = css`
  min-height:${({theme})=>theme.rem(350)};

  article {
    width:${({theme})=>theme.rem(380)};
  }

  a {
    transform:scale(.8);
    animation:none;
  }

  h1 {
    line-height:${({theme})=>theme.rem(40)};
    font-size:1.6rem;
    top:0;
  }

  p {
    padding-top:1.75rem;
    font-size:.8rem;

    & {
      ${({theme})=>theme.gradientText(theme.color.default, 
      theme.hexToRgba(theme.color.default, .6))};
    }
  }
`
