import React, { forwardRef } from 'react'

import styled, { css } from 'styled-components'
import { device } from '@/assets/style/defaults/tags'

import { arr } from './data'

import { Img } from '@/app/resources/Defaults'
import { svg } from '@/app/resources/svgs'

const FooterStyled = styled.footer`
  ${({theme})=>theme.flex.column}
  background:${({theme})=>theme.color.white};
  padding:4rem 1rem 2rem 0rem;
  gap:6rem;
  border-top:1px solid ${({theme})=>theme.color.platinum};

  p:not(section p), section {
    max-width:${({theme})=>theme.rem(1225)};
  }

  section {
    ${({theme})=>theme.flex.startCenter}
    gap:8rem;

    img {
      ${({theme})=>theme.size(theme.rem(180), 'auto')}
    }

    span {
      position:relative;
      top:-1.5rem;
    }

    article {
      gap:.5rem;
      height:10rem;

      &:not(&:last-child), ul {
        ${({theme})=>theme.flex.startColumn}
      }

      &:last-child {
        ${({theme})=>theme.flex.start}
        gap:.25rem;
        padding-top:.25rem;
        cursor:pointer;
        
        a {padding-top:.25rem;}
      }

      ul {gap:.5rem;}
    }
    h2, a {color:${({theme})=>theme.color.strongPurple};}
  }

  p, li {
    color:${({theme})=>theme.hexToRgba(
    theme.color.erieBlack,.8)};
  }

  p:not(section p) {
    width:100%;
    font-size:.8rem;
  }

  ${device(css`
    padding:5rem 1rem 2rem 1rem;
    
    &, section {gap:0;}

    section {
      width:max-content;
      ${({theme})=>theme.flex.columnCenterStart}
      flex-wrap:wrap;

      article {height:12rem;}
    }

    p:not(section p) {
      width:max-content;
      text-align:center;
    }
  `)}
`,

Footer = forwardRef<HTMLElement, 
React.HTMLAttributes<HTMLElement>>((_, ref) => {
  return (
    <FooterStyled ref={ref}><section><span><Img ig='logo'/>
      <p>Monitoramento e rastreamento veicular!</p></span>

      <article className='links'> <h2>Menu</h2>
      <ul>{arr.map((item, index)=>
      <li key={index}>{item}</li>)}</ul></article>

      <article><h2>Adress</h2>
        <ul><li>Pernambuco, Brazil</li>
        <li>Conde da Boa Vista, 2000</li></ul>
      </article>

      <article onClick={()=>{
        window.open(process.env.NEXT_PUBLIC_INSTA, "_blank")
      }}><svg.insta/><a>@{process.env.NEXT_PUBLIC_NAME_INSTA}</a></article>
    </section>

    <p>&copy;Copyright {process.env.NEXT_PUBLIC_NAME_APP}, 
    all rights reserved</p></FooterStyled>
  )
})

Footer.displayName = "Footer"
export default Footer
