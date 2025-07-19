import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useGlobalCtx } from './Global'

const AuthGuard = ({children}: {children:React.ReactNode}) => {
  const router = useRouter(), {isAuth} = useGlobalCtx()
  useEffect(() => {   
    if (!isAuth) {
      router.push('/')
      document.title = `${process.env.NEXT_PUBLIC_TITLE}`
    }

    else document.title = `${process.env.NEXT_PUBLIC_DASHBOARD}`
  }, [isAuth, router])

  return <>{isAuth && <main>{children}</main>}</>
}

export default AuthGuard
