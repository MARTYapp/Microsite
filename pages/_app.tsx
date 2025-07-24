// pages/_app.tsx

import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from 'next-themes'

import { supabase } from '@lib/supabaseClient'
import { UserProvider, useUser } from '@hooks/useUser'

import '@/styles/globals.css'

// Component wrapped in UserProvider context
function InnerApp({ Component, pageProps, router }: AppProps) {
  const { setUser } = useUser()

  useEffect(() => {
    // On initial load
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        setUser(data.session.user)
      }
    })

    // On auth state change
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user)
      } else {
        setUser(null)
      }
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [setUser])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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