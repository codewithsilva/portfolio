import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useGlobalCtx } from '../context/Global'

import { Header } from './styled/header/Header'
import { Main } from './styled/sections/Sections'

import { Button } from '@/assets/style/defaults/tags'
import { Img } from '@/app/resources/Defaults'

import { arr, uiBlocks } from './resources/data'
import { ScrollTop, ZapBtn } from '../resources/BtnsAndOthers'

import Footer from './resources/Footer'
import { User } from 'lucide-react'

const Landing = () => {
  const { isAuth } = useGlobalCtx(),
  
  [menu, setMenu] = useState(false),
  menuRef = useRef<HTMLOListElement | null>(null),
  buttonRef = useRef<HTMLButtonElement | null>(null),

  handleOutside = useCallback((event:MouseEvent) => {
  if (menuRef.current &&
  !menuRef.current.contains(event.target as Node) &&
  buttonRef.current &&
  !buttonRef.current.contains(event.target as Node)) 
  setMenu(false)},[])

  useEffect(() => {
    if (menu) document.addEventListener('click',handleOutside)

    document.addEventListener('click',handleOutside)
    return () => {
    document.removeEventListener('click',handleOutside)}
  },[menu, handleOutside])

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 26)
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [act, setAct] = useState<number | null>(null),
  [appear, setAppear] = useState<number[]>([]),
  sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let activeIndex: number | null = null
  
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target as HTMLElement)

          activeIndex = index === sectionRefs.current.length - 1? 4 : index
        }
      })
      setAct(activeIndex !== null? activeIndex - 1 : null)
    }, {threshold:.5, rootMargin: "-100px 0px 0px 0px"})
  
    sectionRefs.current.forEach((section, index) => {
      if (section && [1, 2, 3, sectionRefs
      .current.length - 1].includes(index)) observer.observe(section)
    })
    return () => observer.disconnect()
  }, []) 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {if (entry.isIntersecting) {
      const index = sectionRefs.current.indexOf(entry.target as HTMLElement)

      if (index !== 0 && index !== -1 && !appear.includes(index)) {
      setAppear((prevNumbers) => [...prevNumbers, index])}}
    })}, {threshold: 0.5, rootMargin: "-100px 0px 0px 0px"})
  
    sectionRefs.current.forEach((section, index) => {
    if (section && index !== 0) observer.observe(section)})
  
    return () => observer.disconnect()
  }, [appear])

  const scrollToSection = (index: number) => {
    const sectionIndex = index === 3? sectionRefs.current.length - 1 : index + 1,
    targetSection = sectionRefs.current[sectionIndex]
  
    if (targetSection) {targetSection
    .scrollIntoView({behavior:"smooth", block:"start"})}
  }, lastItem = uiBlocks.length - 1, router = useRouter()

  useEffect(() => {if (isAuth) router.push('/dashboard')}, [isAuth, router])
  
  return (
    <>{!isAuth && <><Header className={scroll?"scroll":""}><nav>
      <ul className={`${menu?'act':''}`}>
      <Img ig={'white-logo'}/>
      <ol ref={menuRef}>{arr.map((item, index) => (

      <li key={index} onClick={()=>{
        setMenu(false)
        scrollToSection(index)
      }} className={`${act === index?'act':
      act===null?'initial':''}`}>{item}</li>))}</ol></ul>

      <ul><ZapBtn boleto={true}/>
      <Button onClick={async ()=>await router.push('/login')}>
      <User size={16}/></Button>

      <button ref={buttonRef} onClick={()=>setMenu(true)}>
        {Array.from({length:3},(_,index) => (
        <span key={index}></span>))}
      </button></ul>
    </nav></Header>
    
    <Main className="landing">{uiBlocks.map((block, index)=>
    <section key={index} className={appear.includes(index) 
    || index === lastItem?"act":""} ref={el => 

    {sectionRefs.current[index] = el}}>{block}</section>)}</Main> 
    <Footer ref={el => {sectionRefs.current[sectionRefs.current.length - 1] = el}}/>

    <article className='whatsapp-scroll'>
    <span><ZapBtn anin={true}/>
    <ScrollTop/></span></article></>}</>
  )
}

export default Landing
