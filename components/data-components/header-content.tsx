import React from 'react'

export default function PageContent({ children }: { children: string }) {
  return (
    <h2 className="max-w-sm md:max-w-md-content text-center text-xl md:text-3xl">
      {children}
    </h2>
  )
}
