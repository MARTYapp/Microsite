'use client'
import React from 'react'

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className="border border-gray-300 rounded px-3 py-2" {...props} />
)
