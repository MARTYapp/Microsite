import { createClient } from '@supabase/supabase-js'

export default async function Page() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data: todos, error } = await supabase.from('todos').select('*')
  if (error) {
    return <div>Failed to load todos: {error.message}</div>
  }
<stripe-buy-button
  buy-button-id="buy_btn_..."
  publishable-key={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
/>
  return (
    <ul>
      {todos?.map((todo: any) => (
        <li key={todo.id}>{todo.title ?? todo.text ?? JSON.stringify(todo)}</li>
      ))}
    </ul>
  )
}
