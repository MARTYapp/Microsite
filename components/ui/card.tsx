'use client'
import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => (
  <div className={`p-4 bg-white shadow-md rounded ${className}`}>{children}</div>
)

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const CardContent = ({ children, className = '' }: CardContentProps) => (
  <div className={className}>{children}</div>
)
