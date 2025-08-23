import { createClient } from '@supabase/supabase-js'
import Script from 'next/script';

export default async function Page() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      </>
)
  const { data: todos, error } = await supabase.from('todos').select('*')
  if (error) {
    return <div>Failed to load todos: {error.message}</div>
  }
      <Script async src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />
    <>
    </ul>
  )
}
