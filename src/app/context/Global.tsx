"use client"
import {useState, createContext, useContext, useEffect, useCallback, useMemo} from 'react'
import toast, {Toaster, ToastOptions} from "react-hot-toast"
import {useRouter} from 'next/router'

interface GlobalCtxProps {
  scoreUser:number; handleScoreUser:(score:number)=>void; 
  ld:boolean; handleLd:(e:boolean)=>void;
  
  showAdvice:boolean; handleAdvice:(e:boolean)=>void;
  verify:Record<string,boolean>; handleVerify:(key:string | 'reset', value?:boolean)=>void;

  hasMail:boolean; handleHasMail:(e:boolean)=>void;
  emailUser:string; handleMail:(e:string)=>void;
  user:UserPayload | null; handleUser:(user:UserPayload | null)=>void;

  isAuth:boolean; handleAuth: (token:boolean)=>void; 
  handleToast:(message:string, type?:"success" | "error" | "loading" | "custom", options?:ToastOptions)=>void
}

type UserPayload = {id:string; name:string; email:string}

const GlobalCtx = createContext<GlobalCtxProps | undefined>(undefined)

interface GlobalCtxProviderProps {children:React.ReactNode}

export const GlobalCtxProvider = ({children}:GlobalCtxProviderProps) => {
  const router = useRouter()

  const [scoreUser, setScoreUser] = useState<number>(9)
  const [ld, setLd] = useState<boolean>(false)
  const [showAdvice, setShowAdvice] = useState<boolean>(false)
  const [verify, setVerify] = useState<Record<string, boolean>>({})
  const [hasMail, setHasMail] = useState<boolean>(true)
  const [emailUser, setEmailUser] = useState<string>('')
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [user, setUser] = useState<UserPayload | null>(null)

  // Memoize handlers with useCallback
  const handleScoreUser = useCallback((score:number) => setScoreUser(score), [])
  const handleLd = useCallback((e:boolean) => setLd(e), [])
  const handleAdvice = useCallback((e:boolean) => setShowAdvice(e), [])
  
  const handleVerify = useCallback((key:string | 'reset', value?:boolean) => {
    setVerify(prev => {
      if (key === 'reset') {
        if (Object.keys(prev).length === 0) return prev
        return {}
      }
      if (prev[key] === value) return prev
      return {...prev, [key]: value ?? false}
    })
  }, [])

  const handleHasMail = useCallback((e:boolean) => setHasMail(e), [])
  const handleMail = useCallback((e:string) => setEmailUser(e), [])
  const handleAuth = useCallback((type:boolean) => setIsAuth(type), [])
  const handleUser = useCallback((items:UserPayload | null) => setUser(items), [])

  const handleToast = useCallback((
  message: string,
  type: "success" | "error" | "loading" | "custom" = "success",
  options?: ToastOptions
) => {
  toast.dismiss()

  // Definimos o tipo explícito para o objeto com funções que recebem (message, options)
  const toastTypes: Record<
    "success" | "error" | "loading" | "custom",
    (message: string, options?: ToastOptions) => string
  > = {
    success: toast.success,
    error: toast.error,
    loading: toast.loading,
    custom: (msg, opts) => toast(msg, opts),
  }

  const toastFunction = toastTypes[type] || toastTypes.success
  toastFunction(message, options)
}, [])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", {credentials:'include'})
        if (!res.ok) throw new Error('Not authenticated')
        const user:UserPayload = await res.json()

        setIsAuth(true)
        handleUser(user)
      } 
      catch (error) {
        setIsAuth(false)
        handleUser(null)

        const currentPath = window.location.pathname
        if (!["/login", "/"].includes(currentPath)) router.push("/")
      }
    }
    fetchUser()
  }, [handleUser, router])

  // Memoize entire context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({
    scoreUser, handleScoreUser,
    ld, handleLd,
    showAdvice, handleAdvice,
    verify, handleVerify,
    hasMail, handleHasMail,
    emailUser, handleMail,
    handleToast,
    handleAuth, isAuth,
    user, handleUser
  }), [
    scoreUser, handleScoreUser,
    ld, handleLd,
    showAdvice, handleAdvice,
    verify, handleVerify,
    hasMail, handleHasMail,
    emailUser, handleMail,
    handleToast,
    handleAuth, isAuth,
    user, handleUser
  ])

  return (
    <GlobalCtx.Provider value={contextValue}>
      <Toaster position="top-center" reverseOrder={false}/>
      {children}
    </GlobalCtx.Provider>
  )
}

export const useGlobalCtx = (): GlobalCtxProps => {
  const context = useContext(GlobalCtx)
  if (!context) throw new Error('useGlobalCtx not valid')
  return context
}
