// pages/_app.tsx
// pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <main className={`${inter.className} min-h-screen bg-black text-white`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}