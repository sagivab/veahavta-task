import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LogoLink({
  width = 0,
  height = 0,
}: {
  width?: number
  height?: number
}) {
  if (width === 0 || height === 0) {
    return (
      <Link href="/">
        <a>
          <Image src="/logo.svg" layout="fill" objectFit="cover" alt="logo" />
        </a>
      </Link>
    )
  }

  return (
    <Link href="/">
      <a>
        <Image src="/logo.svg" width={width} height={height} alt="logo" />
      </a>
    </Link>
  )
}
