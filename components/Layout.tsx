import Head from 'next/head'
import Link from 'next/link'

export default function Layout({
  children,
  title = 'The MARTY App',
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Head>
        <title>{title}</title>
        <meta name="description" content="MARTY ≠ THERAPY" />
      </Head>

      <header className="p-4 text-sm text-gray-400">
        <Link href="/">← Back to Home</Link>
      </header>

      <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
        {children}
      </main>

      <footer className="p-4 text-xs text-center text-gray-600 border-t border-gray-800">
        © {new Date().getFullYear()} The MARTY App
      </footer>
    </div>
  )
}
