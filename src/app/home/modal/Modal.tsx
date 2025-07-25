import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const Modal = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  const el = document.getElementById('modal-root')
  if (!el) return null

  return ReactDOM.createPortal(
  <div>Conteúdo do Modal</div>,
  el)
}

export default Modal
