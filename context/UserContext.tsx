'use client'

import { createContext } from 'react'
import { User } from '@supabase/supabase-js'

export const UserContext = createContext<{
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
} | null>(null)
