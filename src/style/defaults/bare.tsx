import { css } from "styled-components"

export const bare = css`
  @font-face {
    font-family:'Roboto';
    src:url('/font/roboto.ttf') format('truetype');
  }

  @font-face {
    font-family:'Inter';
    src:url('/font/inter.ttf') format('truetype');
  }

  @font-face {
    font-family:'Poppins';
    src:url('/font/poppins.ttf') format('truetype');
  }

  @font-face {
    font-family:'Poppins-bold';
    src:url('/font/poppins-bold.ttf') format('truetype');
  }

  *, *:before, *:after {
    margin:0;
    padding:0;
    border:0;
    box-sizing:border-box;
    outline:none;
    list-style:none;
    font-family:'Roboto', sans-serif;
    letter-spacing:.1rem;
    color:#121212;
    font-weight:400;
  }

  html, body, main {
    overflow-x:hidden;
  }

  html {
    font-size:1rem;
    scroll-behavior:smooth;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  body {
    line-height:1.5;
    background:${({theme})=>theme.color.white};
    text-rendering:optimizeLegibility;
    ${({theme})=>theme.flex.center}
  }

  img, picture, video, canvas {
    display:block;
    max-width:100%;
  }

  input, button, textarea, select {
    font:inherit;
  }

  a {
    text-decoration:none;
    color:inherit;
    cursor:pointer;
  }

  button {
    border:none;
    background:none;
    cursor:pointer; 
    white-space:nowrap;
  }

  table {
    border-collapse:collapse; 
    border-spacing:0;
  }

  textarea, body {
    &::-webkit-scrollbar {
      width:8px;
    }

    &::-webkit-scrollbar-thumb {
      background:linear-gradient(135deg, #E04D00 0%, #FF7534 100%); 
    }

    &::-webkit-scrollbar-track {
      background-color:#fff;
      border-radius:4px;
    }
  }
`