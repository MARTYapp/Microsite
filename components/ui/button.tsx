'use client'
import React from 'react'

export const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-blue-600 text-white px-4 py-2 rounded">{children}</button>
)
