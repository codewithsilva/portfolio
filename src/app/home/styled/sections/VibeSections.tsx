import { css } from 'styled-components'

export const vibeSections = () => css`
  section {
    &:first-child, &:nth-child(2) {
      article {
        ${({theme})=>theme.flex.center}
      }
    }

    &:nth-child(3), &:nth-child(4), &:nth-child(5),
    &:nth-child(6), &:nth-child(8) {
      padding:2rem 2rem 1rem 2rem;
      gap:5rem;

      article {
        width:${({theme})=>theme.rem(510)};
        ${({theme})=>theme.flex.startColumn}
        gap:1rem;

        h2 {
          color:${({theme})=>theme.color.lavender};
          font-size:1.2rem;
          padding-top:1rem;
        }
        p {font-size:1.1rem;}
      }

      button {
        background:${({theme})=>theme.color.purple};
        color:${({theme})=>theme.color.white};
      }
    }

    &:first-child {
      h1 {
        width:${({theme})=>theme.rem(570)};
        font-size:3.5rem;
      }

      article {
        ${({theme})=>theme.flex.center}
        z-index:1;
      }

      p {
        width:${({theme})=>theme.rem(510)};

        &:nth-child(3) {display:none;}
      }
      img {border-radius:3rem;}
    }

    &:nth-child(2) {
      gap:2rem;

      svg {
        transform:rotate(-10deg);
        opacity:.5;
      }

      h2 {font-size:1.1rem;}
      article {gap:8rem;}

      span {
        gap:.5rem;
        &:not(&:first-child) svg {transform:scale(.8) rotate(-10deg);}

        p {
          text-align:center;
          width:${({theme})=>theme.rem(210)};
        }
      }
    }

    &:nth-child(5) {
      gap:2.25rem;
      
      article {
        gap:0rem;
        ${({theme})=>theme.flex.column}
      }

      h1 {
        width:max-content;
        text-align:center;
      }
    }
  }
`
