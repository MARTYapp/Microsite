'use client'

import { useContext } from 'react'
import { UserContext, UserContextType } from '@/context/UserContext'

export const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}