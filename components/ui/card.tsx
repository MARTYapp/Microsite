'use client'
import React from 'react'

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 bg-white shadow-md rounded">{children}</div>
)
