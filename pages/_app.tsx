import type { AppProps } from "next/app"
import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ThemeProvider } from "next-themes"

import { supabase } from "../lib/supabase" // ✅ RELATIVE PATH
import { useUser, UserProvider } from "../hooks/useUser"

import "../styles/globals.css"

function InnerApp({ Component, pageProps, router }: AppProps) {
  const { setUser } = useUser()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        setUser(data.session.user)
      }
    })

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user)
      } else {
        setUser(null)
      }
    })

    return () => {
      authListener?.subscription?.unsubscribe()
    }
  }, [setUser])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default function MyApp(props: AppProps) {
  return (
    <UserProvider>
      <InnerApp {...props} />
    </UserProvider>
  )
}