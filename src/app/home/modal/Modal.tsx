import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { motion, useDragControls, useMotionValue, animate } from 'framer-motion'

import { useGlobalCtx } from '@/app/context/Global'
import { ModalStyles } from './styled/styled'

import { links } from './resources/data'
import Opts from './containers/Opts'

const Modal = () => {
  const controls = useDragControls(),
  {modal, handleModal} = useGlobalCtx(),

  canCloseRef = useRef(false),
  [mounted, setMounted] = useState(false),

  modalRef = useRef<HTMLDivElement>(null),
  y = useMotionValue(0),

  handleClick = (e:MouseEvent) => {
    if (!canCloseRef.current) return

    const target = e.target as HTMLElement,
    motionEl = modalRef.current

    if (target.tagName.toLowerCase() === 'a' ||
    (motionEl && !motionEl.contains(target))) handleModal(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    setMounted(true)
    const timeout = setTimeout(() => {canCloseRef.current = true}, 100)

    return () => {
      setMounted(false)
      clearTimeout(timeout)
    }
  }, [])

  if (!mounted) return null
  const el = document.getElementById('modal-root')
  if (!el) return null

  return ReactDOM.createPortal(
    <motion.div drag="y" dragControls={controls}
    dragElastic={.2} dragMomentum={false}
    
    style={{y, position:'absolute',
    width:'max-content', height:'25rem',
    borderRadius:'8rem 8rem 0 0', zIndex:10}}

    initial={{y:400}} animate={{y:0}}
    exit={{y:400}} transition={{duration:.3}}

    onDrag={(e, info) => {
    if (info.offset.y < -50) y.set(-50)}}
    
    onDragEnd={(e, info) => {
      if (!modalRef.current) return

      const height = modalRef.current.offsetHeight,
      dragY = info.offset.y

      if (dragY > height * .2) handleModal(false)
      else {animate(y, 0, {type:'spring', 
      stiffness:300, damping:25})}
    }}>
      <ModalStyles className={modal? 'act' : ''} 
      ref={modalRef}> <a/>
        <ul>{links.map(({icon:Icon, url, color}, i) => (
        <React.Fragment key={i}><Icon fill={color}

        onClick={() => window.open(url, '_blank')}/>
        </React.Fragment>))}</ul>

        <Opts/>
      </ModalStyles>
    </motion.div>, el
  )
}

export default Modal
