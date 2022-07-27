import { Common, HomePageType } from '@/lib/interface'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactUsInDetails({ data }: HomePageType) {
  const linkerCreator = (
    link: HomePageType['data']['common']['contactUsLinks'],
  ) => {
    switch (link[0].linkType) {
      case 'tel':
        return [`tel:${link[0].linkValue}`, '']
      case 'email':
        return [`mailto:${link[0].linkValue}`, '']
      case 'address':
        return [
          'https://www.google.com/maps/dir/?api=1&destination=%D7%9E%D7%92%D7%93%D7%9C%20%D7%94%D7%A0%D7%91%D7%99%D7%90%D7%99%D7%9D,%20Haifa',
          '_blank',
        ]
      default:
        return ['#', '']
    }
  }
  return (
    <div className="flex flex-col items-start gap-y-4 p-5">
      <h2 className="text-xl text-center text-icon-bg md:text-2xl md:font-bold md:w-28 md:h-10 md:rounded-full md:bg-light">
        {data.homepage.contactUsHeading}
      </h2>
      <p className="font-bold text-4xl">{data.homepage.contactUsTitle}</p>
      <p className="text-lg max-w-sm">{data.homepage.contactUsText}</p>
      <div className="grid md:grid-cols-2 gap-3">
        {data.common.contactUsLinks.map((link) => {
          const [href, target] = linkerCreator([link])
          return (
            <Link key={link.text} href={href} passHref>
              <a target={target}>
                <div className="flex justify-center items-center gap-x-2 cursor-pointer h-full">
                  <div className="rounded-3xl w-11 h-11 bg-icon-bg flex justify-center items-center">
                    <Image
                      src={link.imagePath}
                      width={30}
                      height={30}
                      alt={link.linkType}
                    />
                  </div>
                  <p className="text-base max-w-[134px]">{link.text}</p>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
