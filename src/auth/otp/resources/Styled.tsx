import styled from 'styled-components'
import { twerk } from '@/style/defaults/default'

export const Styled = styled.form`
  fieldset.otp {
    ${({theme})=>theme.flex.startCenterColumn}
    gap:1rem;
    font-size:.9rem;
    width:auto;

    label {
      text-align:center;
      opacity:.6;
      font-weight:500;
    }

    span {
      ${({theme})=>theme.flex.center}
      gap:.5rem;

      input {
        box-shadow:0 0 6px 0 ${props => props.theme.color.platinum};
        height:4rem;
        width:4rem;
        font-size:3rem;
        padding:1.35rem;
        color:${({theme})=>theme.hexToRgba(
        theme.color.erieBlack, .7)};
        border-radius:.75rem;
        position:relative;

        &.error {box-shadow:0 0 5px 0px ${({theme})=>theme.color.engiRed};
        ${twerk}}
      }
    }

    a {
      width:100%;
      text-align:right;
      text-decoration:none;
      cursor:auto;
    }
  }
  
  @media (max-width:${({theme}) => theme.rem(768)}),
  (max-height:${({theme}) => theme.rem(600)}) {
    fieldset.otp {
      font-size:.8rem;

      span {
        gap:.5rem;

        input.min {
          height:3rem;
          width:2.5rem;
          font-size:2rem;
          padding:.25rem .8rem;
          border-radius:.25rem;
        }
      }
    }
  }`
