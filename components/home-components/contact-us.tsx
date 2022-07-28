import { HomePageType } from '@/lib/interface'
import React from 'react'
import Image from 'next/image'
import ContactUsInDetails from '../data-components/contact-us-details'
import { WrapperLarge } from '../wrapper'
import ContactUsForm from '../data-components/contact-us-form'

interface ContactUsProps {
  data: HomePageType
  id: string
}

export default function ContactUs({ data, id }: ContactUsProps) {
  return (
    <div id={id}>
      <WrapperLarge className="relative md:grid-cols-2 gap-y-14 mb-28 mt-10 md:mt-24 px-5 md:h-contact-us">
        <div className="max-w-lg md:mb-44 self-end justify-self-end">
          <ContactUsInDetails data={data.data} />
        </div>
        <div
          id="contact-us-form"
          className="h-contact-us md:h-banner md:mt-24 md:ml-28"
        >
          <ContactUsForm data={data.data} />
        </div>
        <div className="absolute w-full h-1/2 top-1/2 md:h-3/4 md:top-1/4 -z-20 overflow-hidden bg-contact-bg">
          <div className="hidden md:block absolute top-6 opacity-25 right-0">
            <Image
              src="/icons/circle-vert-icon.svg"
              width={185}
              height={318}
              alt="circle"
            />
          </div>
          <div className="-bottom-24 left-0 absolute opacity-25">
            <Image
              src="/icons/circle-icon.svg"
              width={185}
              height={318}
              alt="circle"
            />
          </div>
        </div>
      </WrapperLarge>
    </div>
  )
}
