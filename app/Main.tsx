import Link from '@/components/Link'
import balance from 'public/static/images/cards/balance-card.png'
import feral from 'public/static/images/cards/feral-card.png'
import resto from 'public/static/images/cards/resto-card.png'
import guardian from 'public/static/images/cards/guardian-card.png'
import dungeons from 'public/static/images/cards/dungeons-card.png'
import raids from 'public/static/images/cards/raids-card.png'

import Image from 'next/image'

export default function Home() {
  const ENABLE_EXTRA_GUIDES = true

  const content = [
    { src: raids, href: '/raids', alt: 'Raid Guides', active: true },
    { src: dungeons, href: '/dungeons', alt: 'Dungeon Guides', active: true },
  ]

  const images = [
    { src: balance, href: '/blog/balance/compendium', alt: 'Balance guide', active: true },
    { src: feral, href: '/blog/feral/compendium', alt: 'Feral guide', active: true },
    { src: resto, href: '/', alt: 'Resto guide', active: false },
    { src: guardian, href: '/', alt: 'Guardian guide', active: false },
  ]

  return (
    <>
      <div className="grid grid-cols-1 gap-4 pt-8 lg:grid-cols-2 ">
        {images.map((image, index) => (
          <Link key={index} href={image.href}>
            <div
              className={`relative block ${image.active ? 'cursor-pointer hover:scale-[1.02]' : 'cursor-default opacity-50'} transition-transform duration-300`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={250}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                className="rounded-lg shadow-md"
              />
            </div>
          </Link>
        ))}
      </div>
      {ENABLE_EXTRA_GUIDES && (
        <div className="grid grid-cols-1 gap-4 md:pt-8">
          {content.map((image, index) => (
            <Link key={index} href={image.href}>
              <div
                className={`relative block ${image.active ? 'cursor-pointer hover:scale-[1.02]' : 'cursor-default opacity-50'} transition-transform duration-300`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={250}
                  style={{ width: '100%', height: 'auto' }}
                  quality={100}
                  className="rounded-lg shadow-md"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
