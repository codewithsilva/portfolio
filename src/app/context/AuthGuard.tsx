import React, { useEffect } from 'react'

import { useRouter } from 'next/router'
import { useGlobalCtx } from './Global'

import { Ld } from '../resources/Defaults'

const AuthGuard = ({children}: {children:React.ReactNode}) => {
  const router = useRouter(), 
  {isAuth, handleLd, ld} = useGlobalCtx()

  useEffect(() => {   
    handleLd(true)
    if (!isAuth) {
      router.push('/')
      document.title = `${process.env.NEXT_PUBLIC_TITLE}`
      handleLd(false)
    }

    else {
      document.title = `${process.env.NEXT_PUBLIC_DASHBOARD}`
      handleLd(false)
    }
  }, [isAuth, router])

  if (ld) return <Ld/>
  return <>{isAuth && <main>{children}</main>}</>
}

export default AuthGuard
