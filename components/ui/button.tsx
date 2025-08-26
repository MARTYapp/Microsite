'use client'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variantStyles = {
  default: 'bg-marty-navy text-white hover:bg-marty-charcoal',
  secondary: 'bg-marty-charcoal text-white hover:bg-black',
  outline: 'border border-marty-steel text-marty-steel hover:bg-marty-steel hover:text-black',
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
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <button
    className={`${variantStyles[variant]} ${sizeStyles[size]} rounded ${fullWidth ? 'w-full' : ''} ${className}`}
    {...props}
  >
    {children}
  </button>
)