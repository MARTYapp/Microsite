'use client'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className = '', ...props }: ButtonProps) => (
  <button
    className={`bg-blue-600 text-white px-4 py-2 rounded ${className}`}
    {...props}
  >
    {children}
  </button>
)