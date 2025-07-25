import Head from "next/head"
import HomeHero from "@/components/HomeHero"

export default function Home() {
  return (
    <>
      <Head>
        <title>The MARTY App</title>
        <meta
          name="description"
          content="MARTY ≠ THERAPY — Built for the overthinkers, avoiders, and the night-crawlers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <HomeHero />
      </main>
    </>
  )
}