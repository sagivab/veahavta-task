import React from 'react'
import Link from 'next/link'
import { ContactUsItemType } from '@/lib/interface'
import Image from 'next/image'

const linkerCreator = (item: ContactUsItemType) => {
  const { linkType, linkValue, text } = item

  switch (linkType) {
    case 'tel':
      return [`tel:${linkValue}`, '']
    case 'email':
      return [`mailto:${linkValue}`, '']
    case 'address':
      return [`https://www.google.com/maps/search/${text}/`, '_blank']
    default:
      return ['#', '']
  }
}

const imagePathColorCreator = (imagePath: string, color: string) => {
  return imagePath.slice(0, imagePath.indexOf('.')) + '-' + color + '.svg'
}

interface ContactUsItemProps {
  item: ContactUsItemType
  bgIconClassName: string
  iconColor: 'blue' | 'white'
  classNameContent?: string
  width?: number
  height?: number
}

export default function ContactUsItem({
  item,
  bgIconClassName,
  iconColor,
  classNameContent = 'max-w-[134px]',
  width = 20,
  height = 20,
}: ContactUsItemProps) {
  const { imagePath, text, linkType } = item
  const [href, target] = linkerCreator(item)
  return (
    <Link href={href} passHref>
      <a target={target}>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <div
            className={`rounded-3xl w-11 h-11 hover:scale-x-110 flex justify-center items-center ${bgIconClassName}`}
          >
            <Image
              src={imagePathColorCreator(imagePath, iconColor)}
              width={width}
              height={height}
              alt={linkType}
            />
          </div>
          <p className={classNameContent}>{text}</p>
        </div>
      </a>
    </Link>
  )
}
