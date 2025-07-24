import { rotate } from "@/style/defaults/default"
import styled from "styled-components"

export const Img = styled.img`
  position:absolute;
  top:43dvh;
  right:-10dvw;
  z-index:-1;
  opacity:.1;
  width:60dvw;
  ${rotate('90s')}
`
