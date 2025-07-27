'use client'

import { useContext } from 'react'
import { User } from '@supabase/supabase-js'
import { UserContext } from '@/context/UserContext'

interface UserContextType {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}