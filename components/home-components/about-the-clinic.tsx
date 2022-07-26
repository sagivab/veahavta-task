import { Homepage } from '@/lib/interface'
import React from 'react'
import Image from 'next/image'
import { WrapperLarge } from '../wrapper'
import About from '../data-components/about'

interface AboutTheClinicProps {
  homepage: Homepage
  id: string
}

export default function AboutTheClinic({ homepage, id }: AboutTheClinicProps) {
  return (
    <div id={id}>
      <WrapperLarge className="md:grid-cols-2 justify-center mt-10 md:mt-24">
        <div className="place-self-center md:place-self-end max-w-sm md:max-w-3xl">
          <Image
            src="/Handslove.png"
            width={702}
            height={628}
            alt="handslove"
          />
        </div>
        {/* <div>aaa</div> */}
        <About homepage={homepage} />
      </WrapperLarge>
    </div>
  )
}
