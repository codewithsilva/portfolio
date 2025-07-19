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
  <Html lang="en" dir="ltr"><Head>
    <meta charSet="utf-8"/>
      <link rel="preload" href="/font/Roboto.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>
      <link rel="preload" as="image" href="/images/0-bgdm.png" type="image/png"/>

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>

      <link rel="manifest" href="/favicon/site.webmanifest"/>
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png"/>
      <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png"/>

      <meta name="description" content="portfolio, dev Fullstack"/>
      <meta name="keywords" content="portfolio, desenvolvedor fullstack, web developer, frontend, backend, React, Node.js, Codewithsilva, developer, nextjs"/>

      <meta name="author" content="codewithsilva"/>
      <meta name="theme-color" content="#f8f9fa"/>
      <meta name="mobile-web-app-capable" content="yes"/>

      <meta name="mobile-web-app-status-bar-style" content="black-translucent"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta property="og:title" content="Codewithsilva | Dev Fullstack"/>

      <meta property="og:description" content="portfolio, dev Fullstack"/>
      <meta property="og:image" content="/images/og-cover.jpg"/>
      <meta property="og:url" content="https://codewithsilva.com"/>
      <meta property="og:type" content="website" />

      <script type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:JSON.stringify({"@context":"https://schema.org",
        "@type":"Person", name:"Codewithsilva",
        
        url:"https://codewithsilva.com",
        description:"portfolio, dev Fullstack",
        sameAs:["https://github.com/codewithsilva",

        "https://api.whatsapp.com/send?phone=5581987113364&text=Hey!"]}),
      }}/>
  </Head>
  
  <body><Main/><NextScript/></body></Html>)}
}

export default MyDocument
