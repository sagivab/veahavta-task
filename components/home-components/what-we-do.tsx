import { Homepage } from '@/lib/interface'
import React, { useState } from 'react'
import { WrapperLarge } from '../wrapper'
import WhatWeDoCard from '../data-components/what-we-do-card'

export default function WhatWeDo({ homepage }: { homepage: Homepage }) {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0)

  const handlePrevCard = () => {
    setCurrentCardIndex((prev) => {
      return prev === 0 ? homepage.whatWeDoCards.length - 1 : prev - 1
    })
  }

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => {
      return prev === homepage.whatWeDoCards.length - 1 ? 0 : prev + 1
    })
  }
  return (
    <div id="what-we-do">
      <WrapperLarge className="auto-rows-auto px-5 mt-10 md:mt-24">
        <h2 className="text-accent text-2xl mb-9 md:mb-0 md:text-center">
          {homepage.whatWeDoHeading}
        </h2>
        <h2 className="hidden md:block font-bold text-8xl mb-14 text-center">
          {homepage.whatWeDoTitle}
        </h2>
        <div className="hidden md:flex justify-center gap-x-7">
          {homepage.whatWeDoCards.map((cardDetails) => (
            <WhatWeDoCard {...cardDetails} key={cardDetails.imagePath} />
          ))}
        </div>
        <div className="group block md:hidden relative mx-auto">
          <div
            className="hidden group-hover:flex justify-center flex-col items-center group-hover:after:hidden -mr-6 h-16 w-16 absolute border-2 border-brown-bg shadow-md rounded-full top-1/2 right-0 -translate-y-8 cursor-pointer"
            onClick={handleNextCard}
          >
            <div className="border-r-2 border-b-2 inline-block p-1 border-dark h-5 w-5 -rotate-45 -translate-x-1"></div>
          </div>
          <div
            className="hidden group-hover:flex justify-center flex-col items-center group-hover:after:hidden -ml-6 h-16 w-16 absolute border-2 border-brown-bg shadow-md rounded-full top-1/2 left-0 -translate-y-8 cursor-pointer"
            onClick={handlePrevCard}
          >
            <div className="border-l-2 border-t-2 inline-block p-1 border-dark h-5 w-5 -rotate-45 translate-x-1"></div>
          </div>
          <WhatWeDoCard {...homepage.whatWeDoCards[currentCardIndex]} />
        </div>
      </WrapperLarge>
    </div>
  )
}
