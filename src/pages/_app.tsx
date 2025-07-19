import { AppProps } from 'next/app'
import { GlobalCtxProvider } from '@/app/context/Global'

import { configs } from '@/assets/style/Configs'
import { ThemeProvider } from 'styled-components'
import MainStyle from '@/assets/style/MainStyle'

const App = ({Component, pageProps}:AppProps) => {
  return (
    <GlobalCtxProvider>
      <ThemeProvider theme={configs}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Volp System | Rastreamento Veicular por GPS em Tempo Real</title>

        <Component {...pageProps}/>
        <MainStyle/>
      </ThemeProvider>
    </GlobalCtxProvider>
  )
}

export default App
