import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import { useState } from 'react'
import Image from 'next/image'
import Hamburger from './icons/hamburger'

interface NavbarProps {
  links: ReadonlyArray<{ [key: string]: string }>
  languages: { [key: string]: string }
}

export default function Navbar({ links, languages }: NavbarProps): JSX.Element {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState<boolean>(false)
  const handleMobileNavbarLinkClicked = () => {
    setIsMobileNavbarOpen(() => {
      document.body.style.overflow = 'visible'
      return false
    })
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
        <ul className="flex-col flex md:flex-row md:gap-x-14 gap-y-2 mb-2 md:mb-0 ">
          {links.map((key) => {
            return (
              <li
                key={key.text}
                onClick={handleMobileNavbarLinkClicked}
                className="text-3xl rounded-md hover:shadow-inner cursor-pointer hover:shadow-dark active:translate-y-1 active:shadow-primary"
              >
                <Link href={key.relativeLink === '' ? '/' : key.relativeLink}>
                  <a>{key.text}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className="flex gap-x-2 p-6 md:p-0">
          {Object.keys(languages).map((key) => {
            return (
              <a
                onClick={handleMobileNavbarLinkClicked}
                key={key}
                className="hover:shadow-inner hover:shadow-dark active:translate-y-1 active:shadow-primary"
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

          @keyframes slideOut {
            0% {
              transform: translateY(0rem);
              opacity: 1;
            }

            100% {
              transform: translateY(-1rem);
              opacity: 0;
              visibility: hidden;
            }
          }

          .slideIn {
            animation-name: slideIn;
          }
          .slideOut {
            animation-name: slideOut;
          }
        `}
      </style>
    </nav>
  )
}
