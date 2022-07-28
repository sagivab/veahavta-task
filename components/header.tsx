import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'

import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import Navbar from './navbar'
import LogoLink from './logo-link'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-4 px-4">
        <div className="grid grid-cols-auto-1fr gap-x-6 h-16 mx-auto max-w-screen-xl px-5 bg-light rounded-xl items-center ">
          <div className="pt-0.5 h-16">
            <LogoLink width={142} height={62} />
          </div>
          <Navbar links={data.appLinks} languages={data.languageNames[0]} />
        </div>
      </header>
    </>
  )
}
