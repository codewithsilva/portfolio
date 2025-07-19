import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet(),
    originalRenderPage = ctx.renderPage

    try {ctx.renderPage = () => 
      originalRenderPage({
    enhanceApp: (App) => props => sheet.collectStyles(<App {...props}/>)})
    const initialProps = await Document.getInitialProps(ctx)
  
    return {...initialProps,
    styles: (<>{initialProps.styles}
    {sheet.getStyleElement()}</>)}} 
    
    finally {sheet.seal()}
  }

  render() {return (
  <Html lang="pt-br" dir="ltr"><Head>
    <meta charSet="utf-8"/>
    <link rel="preload" href="/font/Roboto.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>
    <link rel="preload" as="image" href="/images/0-bgdm.png" type="image/png"/>

    <meta name="description" content="A Volp System é especializada em rastreamento veicular com tecnologia avançada, segurança em tempo real e suporte personalizado."/>
    <link rel="icon" href="/favicon.svg"/>

    <meta name="keywords" content="rastreamento veicular, localizador de veículos, segurança automotiva, rastreador GPS, Volp System, monitoramento de frota, proteção veicular"/>   
    <meta name="author" content="codewithsilva"/>
    <meta name="theme-color" content="#f8f9fa"/>
          
    <meta name="mobile-web-app-capable" content="yes"/>
    <meta name="mobile-web-app-status-bar-style" content="black-translucent"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

    <meta property="og:title" content="Volp System | Rastreamento Veicular Inteligente"/>
    <meta property="og:description" content="Monitore seu veículo em tempo real com a tecnologia da Volp System. Segurança e precisão para sua frota ou carro pessoal."/>

    <meta property="og:image" content="/images/og-cover.jpg"/>
    <meta property="og:url" content="https://app.volpsystem.com"/>
    <meta property="og:type" content="website"/>

    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      "@context": "https://schema.org", "@type": "Organization", name:"Volp System",
      url:"https://app.volpsystem.com", logo:"https://app.volpsystem.com/logo.png",
      description:"Empresa de rastreamento veicular por GPS em tempo real.",
      
      address:{"@type":"PostalAddress", addressCountry:"BR"},
      contactPoint:{"@type":"ContactPoint", contactType:"customer service", telephone:"+558197368979"}
    })}}/>
  </Head>
  
  <body><Main/><NextScript/></body></Html>)}
}

export default MyDocument
