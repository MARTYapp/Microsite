'use client'
import React from 'react'

type InputProps = {
  variant?: 'default' | 'dark' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  error?: boolean
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const variantStyles = {
  default: 'border border-zinc-300 bg-white text-black placeholder-zinc-500 focus:border-marty-navy focus:ring-2 focus:ring-marty-navy/50',
  dark: 'border border-zinc-700 bg-black text-white placeholder-zinc-400 focus:border-marty-steel focus:ring-2 focus:ring-marty-steel/50',
  outline: 'border border-marty-steel bg-transparent text-white placeholder-zinc-500 focus:bg-black focus:border-white focus:ring-2 focus:ring-white/40',
}

const sizeStyles = {
  sm: 'px-2 py-1 text-sm rounded',
  md: 'px-3 py-2 text-base rounded-md',
  lg: 'px-4 py-3 text-lg rounded-lg',
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'default', size = 'md', error = false, className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''}
        ${className}
      `}
      {...props}
    />
  )
)

Input.displayName = 'Input'
