import { CommonComponentProps } from '@/lib/interface'
import React from 'react'
import Image from 'next/image'
import { WrapperLarge } from '../wrapper'
import About from '../data-components/about'

export default function AboutTheClinic({ homepage, id }: CommonComponentProps) {
  return (
    <div id={id}>
      <WrapperLarge className="md:grid-cols-2 justify-center mt-10 md:mt-24 px-5">
        <div className="place-self-center md:place-self-end ">
          <Image
            src="/Handslove.png"
            width={702}
            height={628}
            alt="handslove"
          />
        </div>
        <About homepage={homepage} />
      </WrapperLarge>
    </div>
  )
}
