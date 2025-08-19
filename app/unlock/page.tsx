'use client'
import { useState } from 'react'
export default function Unlock() {
  const [msg, setMsg] = useState('')
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const res = await fetch('/api/unlock', { method: 'POST', body: form })
    if (res.ok) window.location.href = '/'
    else setMsg('Wrong password. Try again.')
  }
  return (
    <main style={{display:'grid',placeItems:'center',minHeight:'100vh',padding:'2rem'}}>
      <div style={{maxWidth:420,width:'100%',border:'1px solid #ddd',padding:'1.25rem',borderRadius:12}}>
        <h1 style={{margin:'0 0 .75rem'}}>Enter Site Password</h1>
        <p style={{margin:'0 0 1rem',opacity:.7}}>Hint: ≠ means NOT.</p>
        <form onSubmit={onSubmit}>
          <input name="password" type="password" placeholder="Password"
                 style={{width:'100%',padding:10,marginBottom:12,borderRadius:8,border:'1px solid #bbb'}} autoFocus />
          <button type="submit" style={{width:'100%',padding:10,borderRadius:8,border:'none',background:'#111',color:'#fff'}}>Unlock</button>
        </form>
        {msg && <p style={{color:'crimson',marginTop:12}}>{msg}</p>}
      </div>
    </main>
  )
}
