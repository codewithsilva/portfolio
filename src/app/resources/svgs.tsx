import { Lock, Mail, Eye } from 'lucide-react'

type SvgComponents = {
  [key:string]:React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const icons:SvgComponents = {
  email:Mail, eye:Eye, psw:Lock,
}

export const svg = new Proxy(icons, {
  get(target, prop:string) {
    if (prop in target) {return target[prop as keyof typeof target]}

    throw new Error('not found')
  },
})
