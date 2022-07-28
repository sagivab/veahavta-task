import { Homepage } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'
import PageContent from '../data-components/header-content'
import ImageWrapper from '../image-frame'
import useWindowSize from 'hooks/useWindowSize'
import Link from 'next/link'

const ImagesData = [
  {
    src: '/Rectangle5.png',
    alt: 'Rectangle5',
    className: 'top-64 right-0 z-10',
  },
  {
    src: '/Rectangle2.png',
    alt: 'Rectangle2',
    className: 'top-16 left-3/4 z-0',
  },
  {
    src: '/Rectangle6.png',
    alt: 'Rectangle6',
    className: 'top-3/4 left-2/3 z-0',
  },
  {
    src: '/Rectangle9.png',
    alt: 'Rectangle9',
    className: 'top-0 right-3/4 z-0',
  },
  {
    src: '/Rectangle8.png',
    alt: 'Rectangle8',
    className: 'top-80 left-0 z-0',
  },
  {
    src: '/Rectangle7.png',
    alt: 'Rectangle7',
    className: 'top-3/4 right-2/3 z-0',
  },
  {
    src: '/Rectangle10.png',
    alt: 'Rectangle10',
    className: 'top-0 left-1/3 z-0',
    height: 190,
  },
]

export default function Banner({ homepage }: { homepage: Homepage }) {
  const [width, _] = useWindowSize()

  const mdScreenSize = 768

  return (
    <div id="top-header">
      <div className="wrapper top- h-banner flex flex-col justify-center items-center overflow-hidden gap-y-6">
        <div className="background"></div>
        <PageHeader>{homepage.title}</PageHeader>
        <PageContent>{`${homepage.description}.`}</PageContent>
        <Link href="#what-we-do" passHref>
          <a className="mt-12 p-3 bg-icon-bg rounded-full font-bold text-light text-2xl">
            {homepage.getToKnowUsButton}
          </a>
        </Link>
        {width >= mdScreenSize &&
          ImagesData.map((imageData) => (
            <ImageWrapper {...imageData} key={imageData.src} />
          ))}
        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            position: relative;
          }
          div.background {
            position: absolute;
            z-index: -1;
            inset: 0;
            background: linear-gradient(
              109.17deg,
              ${themePreval.colors['banner-start']} 38.49%,
              ${themePreval.colors['banner-end']} 72.36%
            );
          }
        `}</style>
      </div>
    </div>
  )
}
