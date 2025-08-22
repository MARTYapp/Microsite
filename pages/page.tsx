import { supabase } from '@/utils/supabase'

export default async function Page() {
  const supabase = createClient()

  const { data: todos, error } = await supabase.from('todos').select('*')
  if (error) {
    return <div>Failed to load todos: {error.message}</div>
  }

  return (
    <ul>
      {todos?.map((todo: any) => (
        <li key={todo.id}>{todo.title ?? todo.text ?? JSON.stringify(todo)}</li>
      ))}
    </ul>
  )
}
