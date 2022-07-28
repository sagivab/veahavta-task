import AboutTheClinic from '@/components/home-components/about-the-clinic'
import Banner from '@/components/home-components/banner'
import ContactUs from '@/components/home-components/contact-us'
import WhatWeDo from '@/components/home-components/what-we-do'
import { HomePageType, HOMEPAGE_QUERY } from '@/lib/interface'
import { NextPageContext } from 'next'
import Head from 'next/head'
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
      <Head>
        <title>{data.homepage.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={data.homepage.description} />
        <meta name="robots" content="index, follow, archive" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
