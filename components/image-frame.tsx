import React from 'react'
import Image from 'next/image'

interface ImageWrapperProps {
  src: string
  alt: string
  className?: string
  height?: number
  width?: number
}

export default function ImageWrapper({
  src,
  alt,
  className = '',
  height = 380,
  width = 315,
}: ImageWrapperProps) {
  return (
    <div className={`absolute ${className}`}>
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  )
}
