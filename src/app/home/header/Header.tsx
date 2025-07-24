import React, { useCallback, useEffect, useRef, useState } from 'react'

import { HeaderCpt } from './styled/styled'
import { Button } from '@/style/defaults/button'

const Header = () => {
  const items = ['Home', 'Projects', 'Skills & Certs', 'About', 'Book a Call'],
  [act, setAct] = useState<number>(0),
  
  highlightRef = useRef<HTMLLIElement | null>(null),
  itemsRef = useRef<(HTMLLIElement | null)[]>([]),

  moveHighlight = (index: number) => {
    const el = itemsRef.current[index],
    highlight = highlightRef.current

    if (el && highlight) {
      const { offsetLeft, offsetWidth } = el
      highlight.style.left = `${offsetLeft}px`
      highlight.style.width = `${offsetWidth}px`
    }
  }
  useEffect(() => {if (act !== null) moveHighlight(act)}, [act])

  const [menu, setMenu] = useState(false),
  menuRef = useRef<HTMLOListElement | null>(null),
  buttonRef = useRef<HTMLButtonElement | null>(null),

  handleOutside = useCallback((event:MouseEvent) => {
  if (menuRef.current &&
  !menuRef.current.contains(event.target as Node) &&
  buttonRef.current &&
  !buttonRef.current.contains(event.target as Node)) 
  setMenu(false)},[]),

  [scroll, setScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 26)
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menu) document.addEventListener('click',handleOutside)

    document.addEventListener('click',handleOutside)
    return () => {
    document.removeEventListener('click',handleOutside)}
  },[menu, handleOutside])

  return (
    <HeaderCpt className={scroll? 'scroll':''}><nav>
      <span>WS</span>

      <ul><ol ref={menuRef}><li ref={highlightRef} className="highlight"/>
        
      {items.map((item, index) => <li key={index}
      ref={el => {itemsRef.current[index] = el}}

      onClick={()=>{
        setMenu(false)
        setAct(index)
        moveHighlight(index)
      }}
      className={act === index?'act':''}>{item}</li>)}</ol>
        
      <Button cv={true}/>
      <button ref={buttonRef} onClick={()=>setMenu(true)}>
        {Array.from({length:3},(_,index) => (
        <span key={index}></span>))}
      </button></ul>
    </nav></HeaderCpt>
  )
}

export default Header
