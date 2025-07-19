/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useState, createContext, useContext, useEffect } from 'react'
import toast, { Toaster, ToastOptions } from "react-hot-toast"

import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'

interface GlobalCtxProps {
  scoreUser: number; handleScoreUser: (score: number) => void; 
  ld: boolean; handleLd: (e: boolean) => void;
  
  showAdvice: boolean; handleAdvice: (e: boolean) => void;
  verify: Record<string, boolean>; handleVerify: (key: string | 'reset', value?: boolean) => void;

  hasMail: boolean; handleHasMail: (e: boolean) => void;
  emailUser: string; handleMail: (e: string) => void;
  user:UserPayload | null; handleUser:(user:UserPayload | null) => void;

  isAuth: boolean; handleAuth: (token: boolean) => void; 
  handleToast: (message: string, type?: "success" | "error" | "loading" | "custom", options?: ToastOptions) => void
}
interface JwtPayload {id:string; name:string; email:string; exp?:number;}

type UserPayload = {id:string; name:string; email:string}

const GlobalCtx = createContext<GlobalCtxProps | undefined>(undefined)
interface GlobalCtxProviderProps {children: React.ReactNode}

export const GlobalCtxProvider = ({ children }: GlobalCtxProviderProps) => {
  const router = useRouter(),
  
  [scoreUser, setScoreUser] = useState<number>(9),
  handleScoreUser = (score: number) => setScoreUser(score),

  [ld, setLd] = useState<boolean>(false),
  handleLd = (e: boolean) => setLd(e),

  [showAdvice, setShowAdvice] = useState<boolean>(false),
  handleAdvice = (e: boolean) => setShowAdvice(e),

  [verify, setVerify] = useState<Record<string, boolean>>({}),
  handleVerify = (key: string | 'reset', value?: boolean) => {
    setVerify(prev => {
      if (key === 'reset') {
        if (Object.keys(prev).length === 0) return prev
        return {}
      }
      if (prev[key] === value) return prev
      
      return {...prev, [key]: value?? false}
    })
  },

  [hasMail, setHasMail] = useState<boolean>(true),
  handleHasMail = (e: boolean) => setHasMail(e),

  [emailUser, setEmailUser] = useState<string>(''),
  handleMail = (e: string) => setEmailUser(e),

  handleToast = (message: string, type: "success" | 
  "error" | "loading" | "custom" = "success", options?: ToastOptions) => {
    toast.dismiss()

    const toastTypes = {
      success: toast.success,
      error: toast.error,

      loading: toast.loading,
      custom: toast
    };
  
    (toastTypes[type] || toast)(message, options)
  },
  
  [isAuth, setIsAuth] = useState<boolean>(false),
  handleAuth = (type:boolean) => setIsAuth(type),

  [user, setUser] = useState<UserPayload | null>(null),
  handleUser = (items:UserPayload | null) => setUser(items)

  useEffect(() => {
    const validateToken = () => {
      const token = localStorage.getItem("token")

      if (token) {
        try {
          const decodedToken = jwtDecode(token),
          currentTime = Date.now() / 1000

          if (decodedToken.exp && decodedToken.exp > currentTime) {
            setIsAuth(true)

            const decoded = jwtDecode<JwtPayload>(token)
            
            handleUser({
              id:decoded.id, 
              name:decoded.name, 
              email:decoded.email
            })
          }
          
          else {
            localStorage.removeItem("token")
            setIsAuth(false)
            router.push('/login')
          }
        } 
        
        catch (error) {
          console.error("Invalid token:", error)
          localStorage.removeItem("token")

          setIsAuth(false)
          router.push('/login')
        }
      } 
      
      else {
        setIsAuth(false)
        const currentPath = window.location.pathname

        if (!["/login", "/signup", "/"]
        .includes(currentPath)) {router.push("/")}
      }
    }
    validateToken()
  }, [isAuth])

  return (
    <GlobalCtx.Provider value={{ 
      scoreUser, handleScoreUser,
      ld, handleLd,

      showAdvice, handleAdvice,
      verify, handleVerify,

      hasMail, handleHasMail,
      emailUser, handleMail, handleToast,

      handleAuth, isAuth, user, handleUser
    }}>
      <Toaster position="top-center" reverseOrder={false}/>
      {children}
    </GlobalCtx.Provider>
  )
}

export const useGlobalCtx = (): GlobalCtxProps => {
  const context = useContext(GlobalCtx)

  if (!context) 
    throw new Error('useGlobalCtx must be used within a GlobalCtxProvider')
  
  return context
}
