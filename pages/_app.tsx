import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

import { supabase } from "../lib/supabase"; // ✅ RELATIVE PATH
import { useUser, UserProvider } from "../hooks/useUser";

import "../styles/globals.css";

function InnerApp({ Component, pageProps, router }: AppProps) {
  const { setUser } = useUser()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession()
      if (data?.session?.user) setUser(data.session.user)
      setLoading(false)
    }
    getUser()

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => authListener?.subscription?.unsubscribe()
  }, [setUser])

  if (loading) return null // optional splash screen or spinner

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
  );
}
