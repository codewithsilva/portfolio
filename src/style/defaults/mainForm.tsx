import { css } from 'styled-components'
import { neuralBg } from './default'

export const mainForm = css`
  main.client {
    padding:.75rem 0;
    width:100dvw;
    display:flex;
    flex-direction:column; 
    justify-content:center;
    align-items:center;
    gap:.75rem;
  }
  
  form button {
    padding:1rem;
    font-weight:800;
    font-size:1.2rem;
    border-radius:.75rem;
    color:${i=>i.theme.color.primary};
    box-shadow:0 0 6px 0 ${({theme}) => theme.color.secondary};
    position:relative;
    white-space:nowrap;
    overflow:hidden;
    width:100%;
    ${({theme})=>theme.flex.center}
    
    &.ld {
      color:transparent;
      cursor:auto;
      user-select:none;
      pointer-events:none;
      animation:ld .3s linear forwards;

      @keyframes ld {
        0% {
          width:100%;
          height:auto;
          border-radius:2rem;
          transform:scale(1);
        }

        90% {border-radius:2rem;}

        100% {
          width:3.7rem;
          height:3.7rem;
          border-radius:100%;
          transform:scale(.9);
        }
      }
    }

    animation:out-ld .2s linear forwards;
    @keyframes out-ld {
      0% {
        width:3.5rem;
        border-radius:100%;
        transform:scale(.9);
      }
      10% {border-radius:2rem;}
      100% {
        width:100%;
        border-radius:.75rem;
        transform:scale(1);
      }
    }

    &:before {
      ${({theme}) => theme.defDoubleDot}
      ${({theme}) => theme.bgStyle}
      z-index:-3;
      ${({theme}) => theme.screenContainer}
      ${({theme}) => theme.gradient(
      theme.color.purple, theme.color.secondary)}
    }

    &:after {
      ${neuralBg}
      opacity:.3 !important;
      transform:scale(1);
      z-index:-2;
    }
  }
  
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance:none;
    appearance:none;
    margin:0;
  }

  input:-webkit-autofill {
    -webkit-background-clip:text !important;
    transition:background-color 0s ease-in-out 0s;
    -webkit-text-fill-color:${({theme})=>theme.color.primary} !important;
  }
  
  input[type="number"] {
    -moz-appearance:textfield;
    appearance:textfield;
  }
  
  @media (max-width:${({theme})=>theme.rem(768)}) {
    form button {border-radius:.75rem;}
  }`