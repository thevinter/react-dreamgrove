import Link from '@/components/Link'
import balance from 'public/static/images/cards/balance-card.png'
import feral from 'public/static/images/cards/feral-card.png'
import resto from 'public/static/images/cards/resto-card.png'
import guardian from 'public/static/images/cards/guardian-card.png'

import Image from 'next/image'

export default function Home() {
  const images = [
    { src: balance, href: '/blog/balance/compendium', alt: 'Balance guide', active: true },
    { src: feral, href: '/blog/feral/compendium', alt: 'Feral guide', active: true },
    { src: resto, href: '/', alt: 'Resto guide', active: false },
    { src: guardian, href: '/', alt: 'Guardian guide', active: false },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:pt-8">
      {images.map((image, index) => (
        <Link key={index} href={image.href}>
          <div
            className={`relative block ${image.active ? 'cursor-pointer hover:scale-[1.02]' : 'cursor-default opacity-50'} transition-transform duration-300`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={890}
              height={166}
              className="rounded-lg shadow-md"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
