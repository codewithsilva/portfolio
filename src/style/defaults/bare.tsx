import { css } from "styled-components"
import { radial } from "./tags"

export const bare = css`
  @font-face {
    font-family:'WorkSans';
    src:url('/font/work/WorkSans-VariableFont_wght.ttf') format('truetype');
    font-weight:100 900;
    font-style:normal;
    font-display:swap;
  }

  @font-face {
    font-family:'Cinzel';
    src:url('/font/CinzelReg.ttf') format('truetype');
    font-weight:400;
    font-style:normal;
    font-display:swap;
  }

  @font-face {
    font-family:'CinzelBold';
    src:url('/font/CinzelBold.ttf') format('truetype');
    font-weight:700;
    font-style:normal;
    font-display:swap;
  }

  @font-face {
    font-family:'CinzelStrong';
    src:url('/font/CinzelStrong.ttf') format('truetype');
    font-weight:900;
    font-style:normal;
    font-display:swap;
  }

  *, *:before, *:after {
    margin:0;
    padding:0;
    border:0;
    box-sizing:border-box;
    outline:none;
    list-style:none;
    font-family:'WorkSans', sans-serif;
    letter-spacing:.05rem;
    color:${({theme})=>theme.color.default};
    font-weight:400;
  }

  html, body, main {overflow-x:hidden}

  html {
    font-size:1rem;
    scroll-behavior:smooth;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  body {
    line-height:1.5;
    background:${({theme})=>theme.color.neutral};
    text-rendering:optimizeLegibility;
    ${({theme})=>theme.flex.center}

    &:after {
      ${({theme})=>theme.defDoubleDot}
      ${({theme})=>theme.screen}
      ${radial}
      z-index:-2;
    }
  }

  *::selection {
    background:${({theme})=>theme.hexToRgba(theme.color.secondary, .6)};
  }


  h1, h2, h3, h4, h5, h6,
  span, a, i, p, bdo {display:inline-block;} 

  span {
    font-family:'CinzelStrong', serif;
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
      background:#0F172A;
      border-radius:1rem; 
    }

    &::-webkit-scrollbar-track {
      background-color:#0F172A;
    }
  }
`