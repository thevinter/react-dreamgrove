'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import png from '../public/static/images/logo.png'
import Image from 'next/image'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

const Header = () => {
  const route = usePathname()
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center">
            <div className="mr-3">
              <Image src={png} alt="Logo" width={40} height={40} />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="font-thiccboi text-4xl text-[#dd6b20] sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="dark:hover:text-primary-400 hidden text-xl text-gray-900 hover:text-primary-500 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
