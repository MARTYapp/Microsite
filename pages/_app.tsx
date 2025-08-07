import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.css'
import { UserProvider } from '@/context/UserContext'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const root = document.documentElement
      if (scrollY > 80) {
        root.classList.add('bg-monotone')
        root.classList.remove('bg-hero')
      } else {
        root.classList.add('bg-hero')
        root.classList.remove('bg-monotone')
      }
    }

    if (typeof window !== 'undefined') {
      let ticking = false
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll()
            ticking = false
          })
          ticking = true
        }
      }
      window.addEventListener('scroll', onScroll)
      handleScroll()

      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }
  }, [])

  return (
    <ThemeProvider attribute="class">
      <UserProvider>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>The MARTY App</title>
        </Head>
        <main lang="en" className="transition-colors duration-500 ease-in-out">
          <Component {...pageProps} />
        </main>
      </UserProvider>
    </ThemeProvider>
  )
}