import React from 'react'

interface HamburgerProps {
  className?: string
}

export default function Hamburger({ className }: HamburgerProps) {
  return (
    <div
      className={`rounded-3xl relative flex flex-col gap-y-1 justify-center items-center p-4 ${className}`}
    >
      <div className="border-1 border-dark w-3 rounded-sm"></div>
      <div className="border-1 border-dark w-3 rounded-sm"></div>
      <div className="border-1 border-dark w-3 rounded-sm"></div>
    </div>
  )
}
