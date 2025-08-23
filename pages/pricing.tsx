import dynamic from 'next/dynamic';

const FundTheFounderEnv = dynamic(() => import('@/components/FundTheFounderEnv'), { ssr: false });

export default function Pricing() {
  return (
    <main style={{minHeight:'100vh', padding:'4rem 1.5rem', display:'grid', placeItems:'start center', gap:'24px', background:'#000', color:'#fff'}}>
      <h1 style={{margin:0}}>Support MARTY ≠ THERAPY</h1>
      <p style={{opacity:0.9, maxWidth:640, textAlign:'center'}}>
        Your support helps us ship the prototype and keep it free for early users.
      </p>
      <FundTheFounderEnv bmcUrl="https://www.buymeacoffee.com/YOURHANDLE" />
    </main>
  );
}
