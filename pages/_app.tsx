import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const body = document.body
      if (scrollY > 80) {
        body.classList.add('bg-monotone')
        body.classList.remove('bg-hero')
      } else {
        body.classList.add('bg-hero')
        body.classList.remove('bg-monotone')
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // trigger on mount
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <Component {...pageProps} />
}