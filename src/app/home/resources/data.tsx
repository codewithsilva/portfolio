import { Button } from "@/assets/style/defaults/tags"

import { Img } from "@/app/resources/Defaults"
import { LocateIcon, LockKeyhole, Phone } from "lucide-react"

const arr = ['Benefícios', 'Aplicativos', 'Motivadores', 'Monitoramento'],

Home = () => {
  return (<><article>
  <span> <h1>Segurança e eficiência 
    na palma da sua mão</h1>
    <Button>Simular Proteção</Button>
  </span><Img ig='Vehicles'/></article></>)
},

bnfs = [
{title: "Monitoramento 24h", icon: LocateIcon,
text: "Conte com vigilância ininterrupta do seu veículo, garantindo segurança total a qualquer hora do dia ou da noite."},

{title: "Bloqueio remoto", icon: LockKeyhole,
text: "Em situações de emergência, bloqueie o motor à distância com apenas um clique e proteja seu patrimônio."},

{title: "Histórico de trajetos", icon: Phone,
text: "Acesse registros detalhados de todas as rotas percorridas. Tudo com facilidade e rapidez no celular"}],

Benefits = () => (<><h1>Principais benefícios</h1><article>
  {bnfs.map((item,index) => {const SvgIcon = item.icon
      
  return (<span key={index}><SvgIcon size='56' stroke='#E64A19'/> 
  <h2>{item.title}</h2><p>{item.text}</p></span>)})}</article></>
),

Mtlgs = () => (<><article><h1>Aplicativo</h1>
  <p>Com o app da Volp System, você controla seu veículo direto do celular: veja a localização em tempo real, ative o bloqueio remoto, receba alertas e acesse o histórico de trajetos. Simples, rápido e disponível para Android e iOS</p>

  <Button>Simular Proteção</Button></article><Img ig='Mobile'/></>
),

Motivators = () => (<><Img ig='Girl'/><article>
  <h1>Por que a Volp System?</h1>
  <p>Na Volp System, unimos tecnologia de ponta e
  atendimento dedicado para oferecer soluções de
  rastreamento veicular que garantem mais segurança,
  eficiência e economia para você e sua empresa</p>

  <h2>Confiança</h2>
  <p>Confie em quem entende de proteção veicular e
  impulse a gestão dos seus veículos com a Volp
  System!</p></article></>
),

storeLinks = [{name:'Android', url:process.env.NEXT_PUBLIC_ANDROID},
{name:'Apple', url:process.env.NEXT_PUBLIC_APPLE}],
FlexibleForm = () => (<><article><h1>Baixe agora</h1>
  <p>Nosso aplicativo oferece rastreamento em tempo real, bloqueio
  remoto, alertas instantâneos e muito mais.</p></article>

  <p>{storeLinks.map(({name, url}) => 
  <a key={name} href={url} target="_blank" rel="noopener noreferrer">
  <Img ig={name}/></a>)}</p></>
),

Ml = () => (<><article><h1>Monitoramento da frota</h1>
  <p>O monitoramento de frota da Volp System
  oferece uma gestão inteligente e segura
  para empresas que dependem de veículos
  no dia a dia.</p>
  
  <Button>Simular Proteção</Button></article><Img ig='Cars'/></>
),

uiBlocks = [<Home key="Home"/>, <Benefits key="Benefits"/>,
<Mtlgs key="Mtlgs"/>, <Motivators key='Motivators'/>, 

<FlexibleForm key='FlexibleForm'/>, <Ml key='Ml'/>]

export {arr, uiBlocks}
