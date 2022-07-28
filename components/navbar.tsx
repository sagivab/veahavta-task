import { ChangeLangButton } from './data-components/change-language-button'
import { useState } from 'react'
import Image from 'next/image'
import Hamburger from './icons/hamburger'
import NavigationLinks from './data-components/navigation-links'
import { AppLinkType, LanguagesType } from '@/lib/interface'

interface NavbarProps {
  links: Array<AppLinkType>
  languages: LanguagesType
}

export default function Navbar({ links, languages }: NavbarProps): JSX.Element {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState<boolean>(false)

  const handleMobileNavbarLinkClicked = () => {
    document.body.style.overflow = 'visible'
    setIsMobileNavbarOpen(false)
  }

  const handleHamburgerClicked = () => {
    setIsMobileNavbarOpen((prev) => {
      document.body.style.overflow = prev === true ? 'visible' : 'hidden'
      return !prev
    })
  }

  return (
    <nav className="flex md:block justify-end z-50 ">
      <button
        className="flex md:hidden justify-center items-center justify-self-end"
        onClick={handleHamburgerClicked}
      >
        <span className="sr-only">Open main menu</span>
        <Hamburger className="w-11 h-11 bg-hamburger-bg" />
      </button>
      <div
        className={`${
          isMobileNavbarOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row justify-between fadeinDropdown slideIn items-center md:static absolute text-center top-20 left-4 right-4 bg-light rounded-lg`}
      >
        <NavigationLinks
          appLinks={links}
          classNameList="flex-col flex md:flex-row md:gap-x-14 gap-y-2 mb-2 md:mb-0"
          classNameItem="text-3xl cursor-pointer hover:scale-125 active:translate-y-1"
          onClick={handleMobileNavbarLinkClicked}
        />
        <ul className="flex gap-x-2 p-6 md:p-0">
          {Object.keys(languages).map((key) => {
            return (
              <a
                onClick={handleMobileNavbarLinkClicked}
                key={key}
                className="hover:scale-110 active:translate-y-1 "
              >
                <ChangeLangButton lang={key}>
                  <Image src={`/${key}.svg`} width={52} height={32} alt={key} />
                </ChangeLangButton>
              </a>
            )
          })}
        </ul>
      </div>
      <style jsx>
        {`
          .fadeinDropdown {
            animation-duration: 0.5s;
            animation-fill-mode: both;
          }

          @keyframes slideIn {
            0% {
              transform: translateY(-1rem);
              opacity: 0;
            }

            100% {
              transform: translateY(0rem);
              opacity: 1;
            }
          }

          .slideIn {
            animation-name: slideIn;
          }
        `}
      </style>
    </nav>
  )
}
