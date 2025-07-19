import { css } from 'styled-components'

export const Details = css`
  &.advice label span {
    color:${({theme})=>theme.color.engiRed};

    svg path {
      fill:${({theme})=>theme.color.engiRed}
    }
  }

  @media(max-width:${({theme})=>theme.rem(1040)}),
  (max-height:${({theme})=>theme.rem(600)}) {
    label span, input {font-size:1rem;}
  }`
