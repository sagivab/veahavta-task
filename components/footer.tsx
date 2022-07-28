import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import ContactUsItem from './data-components/contact-us-item'
import NavigationLinks from './data-components/navigation-links'
import LogoLink from './logo-link'
import Link from 'next/link'
export default function Footer({ data }: CommonType) {
  return (
    <WrapperLarge>
      <footer className="bg-light grid md:grid-cols-4 py-12 md:px-44 gap-y-5 justify-items-center">
        <div className="relative w-52 h-24 md:w-80 md:h-36">
          <LogoLink />
        </div>
        <div className="flex flex-col gap-y-3">
          <Link href="#contact-us-form" passHref>
            <a className="text-icon-bg font-bold p-3 border-2 border-icon-bg  rounded-full hover:scale-125">
              {data.footerScheduleButton}
            </a>
          </Link>
          <button className="text-icon-bg font-bold py-3 px-5 border-2 border-icon-bg  rounded-full hover:scale-125">
            {data.footerSupportUsButton}
          </button>
        </div>
        <div className="hidden md:block">
          <h2 className="font-bold text-2xl">{data.footerMenuTitle}</h2>
          <NavigationLinks
            appLinks={data.appLinks.slice(1)}
            classNameItem="cursor-pointer hover:scale-110 active:translate-y-1"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 px-2">
            {data.footerContactUsTitle}
          </h2>
          <div className="flex flex-col">
            {data.contactUsLinks.map((link) => {
              return (
                <ContactUsItem
                  key={link.text}
                  item={link}
                  bgIconClassName="bg-light"
                  iconColor="blue"
                  classNameContent="max-w-md"
                />
              )
            })}
          </div>
        </div>
      </footer>
    </WrapperLarge>
  )
}
