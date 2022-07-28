import AboutTheClinic from '@/components/home-components/about-the-clinic'
import Banner from '@/components/home-components/banner'
import ContactUs from '@/components/home-components/contact-us'
import WhatWeDo from '@/components/home-components/what-we-do'
import { HomePageType, HOMEPAGE_QUERY } from '@/lib/interface'
import { NextPageContext } from 'next'
import { request } from '../lib/datocms'

export async function getStaticProps({ locale }: NextPageContext) {
  const data = await request({
    query: HOMEPAGE_QUERY(locale as string),
  })
  return {
    props: { data },
  }
}

export default function Home({ data }: HomePageType) {
  // console.log('Home data\n=========\n', data)
  return (
    <>
      <Banner homepage={data.homepage} />
      <AboutTheClinic
        homepage={data.homepage}
        id={data.common.appLinks[1].relativeLink.slice(1)}
      />
      <WhatWeDo homepage={data.homepage} />
      <ContactUs
        data={{ data }}
        id={data.common.appLinks[2].relativeLink.slice(1)}
      />
      {/* Here is the structure of the home page data: */}
      {/* <pre className="bg-dark text-light">{JSON.stringify(data, null, 2)}</pre> */}
    </>
  )
}
