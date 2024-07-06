// components/InstanceCard.js

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const InstanceCard = ({ title, headerImage, path }) => {
  return (
    <Link
      className="relative block overflow-hidden rounded-lg border border-gray-300"
      href={`/${path}`}
    >
      <div className="relative h-48 w-full">
        <Image
          alt={title}
          src={`/static/images/${headerImage}`}
          quality={100}
          layout="fill"
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 text-white">{title}</div>
    </Link>
  )
}

export default InstanceCard