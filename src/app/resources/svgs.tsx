import Logo from '@/assets/svgs/logo.svg'
import Whatsapp from '@/assets/svgs/whatsapp.svg'

//defaults
import Goback from '@/assets/svgs/defaults/arrow.svg'
import ArrowHead from '@/assets/svgs/defaults/arrowhead.svg'

import Like from '@/assets/svgs/defaults/like.svg'
import Deslike from '@/assets/svgs/defaults/deslike.svg'
import Insta from '@/assets/svgs/defaults/insta.svg'

import Block from '@/assets/svgs/defaults/block.svg'
import Reload from '@/assets/svgs/defaults/reload.svg'

//user
import Email from '@/assets/svgs/user/email.svg'
import Eye from '@/assets/svgs/user/eye.svg'
import Psw from '@/assets/svgs/user/psw.svg'

type SvgComponents = {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const icons: SvgComponents = {
  //defaults
  logo:Logo, whatsapp:Whatsapp, 
  
  like:Like, arrowHead:ArrowHead,
  deslike:Deslike, insta:Insta,
  block:Block, reload:Reload, goback:Goback,

  //user
  email:Email, 
  eye:Eye, psw:Psw,
}

export const svg = new Proxy(icons, {
  get(target, prop: string) {
    if (prop in target) {return target[prop]}

    throw new Error(`"${prop}" not Found`)
  },
})
