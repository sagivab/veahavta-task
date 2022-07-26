import React from 'react'

export default function PageContent({ children }: { children: string }) {
  return (
    <h2 className="max-w-content-sm md:max-w-content-md text-center text-xl md:text-3xl">
      {children}
    </h2>
  )
}
