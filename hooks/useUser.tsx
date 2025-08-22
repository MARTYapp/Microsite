'use client'

import { useContext } from 'react'
import { UserContext, UserContextType } from '@/context/UserContext'

export const useUser = (): UserContextType | null => {
  const context = useContext(UserContext)
  // If not wrapped in <UserProvider>, return null instead of throwing
  return context ?? null
}