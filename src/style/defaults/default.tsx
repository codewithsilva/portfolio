import { css } from 'styled-components'

//animations
export const rotate = css`
  animation:rt .7s linear infinite;

  @keyframes rt {
    from {transform:rotate(0deg)}
    to {transform:rotate(360deg)}
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
  drc="top", dur=0.3, scl=false, rel=true,
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
  background:${({theme})=>theme.color.strongPurple};
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

//design
export const neuralBg = css`
  background:url('/images/0-bgdm.png');
  ${({theme})=>theme.defDoubleDot}
  ${({theme})=>theme.bgStyle}
  ${({theme})=>theme.screenContainer}
  z-index:0;
  ${appear({opacityOnly:true, toOpacity:1, dur:.7, rel:false})}
`
