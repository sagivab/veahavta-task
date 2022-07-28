import { HomePageType } from '@/lib/interface'
import React from 'react'
import ContactUsItem from './contact-us-item'

export default function ContactUsInDetails({ data }: HomePageType) {
  return (
    <div className="flex flex-col items-start gap-y-4 p-5">
      <h2 className="text-xl text-center p-3 text-icon-bg md:text-2xl md:font-bold md:rounded-full md:bg-light">
        {data.homepage.contactUsHeading}
      </h2>
      <p className="font-bold text-3xl">{data.homepage.contactUsTitle}</p>
      <p className="text-lg max-w-sm">{data.homepage.contactUsText}</p>
      <div className="grid md:grid-cols-2 gap-3">
        {data.common.contactUsLinks.map((link) => {
          return (
            <ContactUsItem
              key={link.text}
              item={link}
              bgIconClassName="bg-icon-bg"
              iconColor="white"
            />
          )
        })}
      </div>
    </div>
  )
}
