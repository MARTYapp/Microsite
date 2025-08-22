'use client'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variantStyles = {
  default: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-700 text-white hover:bg-gray-800',
  outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
}

const sizeStyles = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const Button = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) => (
  <button
    className={`${variantStyles[variant]} ${sizeStyles[size]} rounded ${className}`}
    {...props}
  >
    {children}
  </button>
)