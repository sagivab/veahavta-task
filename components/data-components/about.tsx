import { Homepage } from '@/lib/interface'
import React from 'react'

export default function About({ homepage }: { homepage: Homepage }) {
  return (
    <div className="flex flex-col py-10 px-3 md:px-28 gap-y-1 md:gap-y-3">
      <h2 className="text-header-blue md:text-3xl">{homepage.aboutHeading}</h2>
      <p className="max-w-content-xs md:max-w-content-md text-4xl md:text-6xl font-bold mb-5 md:mb-10">
        {homepage.aboutTitle}
      </p>
      <p className="max-w-content-xs md:max-w-lg text-lg md:text-lg">
        {homepage.aboutUsText}
      </p>
      <button className="w-48 h-16 mt-9 bg-icon-bg rounded-full font-bold text-light text-2xl inline-block">
        {homepage.aboutUsButton}
      </button>
    </div>
  )
}
