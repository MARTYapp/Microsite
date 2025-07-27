'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { motion } from 'framer-motion'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, size = 'md', icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Comp
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl',
            sizeClasses[size],
            className
          )}
          ref={ref}
          {...props}
        >
          {icon && <span className="text-xl">{icon}</span>}
          {children}
        </Comp>
      </motion.div>
    )
  }
)

Button.displayName = 'Button'
export { Button }