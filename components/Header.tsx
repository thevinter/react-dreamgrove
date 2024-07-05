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
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-start justify-between">
            <div className="mr-3">
              <Image src={png} alt="Logo" width={40} height={40} />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 align-top text-4xl font-semibold text-[#1a9c82] sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="dark:hover:text-primary-400 hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100
              sm:block"
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
