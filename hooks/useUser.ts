// hooks/useUser.ts

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"
import { supabase } from "../lib/supabaseClient"

type UserContextType = {
  user: any
  setUser: (user: any) => void
}

// Create context with type safety
const UserContext = createContext<UserContextType | undefined>(undefined)

// Context provider wrapper
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook to use user context
export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}