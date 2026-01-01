import { css, keyframes } from 'styled-components'

//animations
export const rotate = (drt='.7s') => css`
  animation:rt ${drt} linear infinite;

  @keyframes rt {
    from {transform:rotate(0deg)}
    to {transform:rotate(360deg)}
  }
`

export const ploc = css`
  position:relative;
  animation:pl .7s linear infinite;

  @keyframes pl {
    0%, 100% {top:0;}
    50% {top:-.15rem;;}
  }
` 

export const fadeInLetter = css`
  animation:fading .1s ease forwards;

  @keyframes fading {
    from {
      opacity:0;
      right:.05rem;
      transform:scale(.5);
    }

    to {
      opacity:1;
      right:0;
      transform:scale(1);
    }
  }
` 

export const appear = ({
  drc="top", dur=.3, scl=false, rel=true,
  opacityOnly=false, toOpacity=1
} = {}) => {
  const sanitizedOpacity = Math.round(toOpacity * 100),
  animationName = `appear-${drc}${scl? '-scale' : ''}${opacityOnly? `-fade-${sanitizedOpacity}` : ''}`

  return css`
    ${rel? 'position:relative;' : 'position:absolute;'}
    animation:${animationName} ${dur}s linear forwards;

    @keyframes ${animationName} {
      0% {
        ${!opacityOnly? `${drc}: -2rem;` : ''}
        opacity:0;
        ${scl && !opacityOnly? 'transform:scale(.9);' : ''}
      }

      100% {
        ${!opacityOnly? `${drc}: 0;` : ''}
        opacity:${toOpacity};
        ${scl && !opacityOnly? 'transform:scale(1);' : ''}
      }
    }
  `
}

export const twerk = css`
  animation:negative .3s linear 3 forwards;

  @keyframes negative {
  0% {left:-.5rem}
  50% {left:.5rem}
  100% {left:0}}
`

export const appearMenu = css`
animation:anin .3s linear forwards;

@keyframes anin {
  from {top:-15rem;}
  to {top:0;}}
`

export const hideMenu = css`
  animation:hide .3s linear forwards;

  @keyframes hide {
  from {top:0;}
  to {top:-15rem;}}
`

export const detail = css`
  ${({theme})=>theme.defDoubleDot}
  ${({theme})=>theme.sameSize(theme.rem(63))}
  background:${({theme})=>theme.color.primary};
  z-index:-1;
  pointer-events:none;
  cursor:auto;
  border-radius:1.2rem;
`

//variables
export const grid = css`
  display:grid;
  place-items:center;
  grid-template-columns:1/1;
`

const shimmer = keyframes`
0% {transform:translateX(-100%)}
100% {transform:translateX(100%)}`

export const scanner = css`
  position:relative;
  overflow:hidden;

  &::after {
    ${({theme})=>theme.screenContainer}
    ${({theme})=>theme.defDoubleDot}

    background:linear-gradient(120deg,
    ${({theme})=> theme.hexToRgba(theme.color.default, 0)} 0%,
    ${({theme})=> theme.hexToRgba(theme.color.default, .2)} 50%,
    ${({theme})=> theme.hexToRgba(theme.color.default, 0)} 100%);
    animation:${shimmer} 1.3s ease-in-out infinite;
  }
`
