import React, { ClassicComponent, ClassType } from 'react'
import Image from 'next/image'

interface WhatWeDoCardProps {
  imagePath: string
  title: string
  text: string
}

export default function WhatWeDoCard({
  imagePath,
  title,
  text,
}: WhatWeDoCardProps) {
  return (
    <div>
      <div className="w-80 h-60  bg-what-we-do-upper rounded-t-3xl flex justify-center items-center">
        {imagePath && (
          <Image
            src={imagePath}
            width={128}
            height={128}
            alt={imagePath.slice(
              imagePath.lastIndexOf('/'),
              imagePath.indexOf('.'),
            )}
          />
        )}
      </div>
      <div className="w-80 h-60 bg-light rounded-3xl border-2 px-4 py-8 border-light shadow-md">
        <h3 className="text-header-blue text-3xl font-bold mb-2">{title}</h3>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  )
}
