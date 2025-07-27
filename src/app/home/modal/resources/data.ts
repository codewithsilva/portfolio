import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'

const links = [
  {icon:SiGithub,
  url:process.env.NEXT_PUBLIC_GITHUB,
  color:'#333'},
  
  {icon:SiLinkedin,
  url:process.env.NEXT_PUBLIC_LINKEDIN,
  color:'#0077B5'},
  
  {icon:SiInstagram,
  url:process.env.NEXT_PUBLIC_INSTAGRAM,
  color:'#E1306C'}
],

opts = ['Quick Connect', 'My CV', 'Fill a Form']

export {links, opts}
