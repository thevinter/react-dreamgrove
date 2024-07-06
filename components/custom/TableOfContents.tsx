'use client'
import { clsx, type ClassValue } from 'clsx'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const TocItem = ({ item, activeSlug }) => {
  const isActive = getIdFromUrl(item.url) === activeSlug

  return (
    <li
      className={`my-2 text-sm ${isActive ? 'font-bold text-orange-600 dark:text-orange-600/50' : 'text-gray-800 dark:text-gray-400'}`}
      style={{
        marginLeft: `${(item.depth - 1) * 25}px`,
        marginTop: '8px',
      }}
    >
      <Link legacyBehavior href={item.url.replace(/-\d+$/, '')}>
        <a dangerouslySetInnerHTML={{ __html: item.value }} />
      </Link>
    </li>
  )
}

export default function TableOfContents({ chapters }) {
  const [activeSlug, setActiveSlug] = useState('')
  console.log(activeSlug)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry?.isIntersecting) {
            setActiveSlug(entry.target.id)
          }
        })
      },
      {
        rootMargin: '5% 0px 5% 0px', // Adjusting to handle multiple h1s in view
      }
    )

    chapters.forEach((chapter) => {
      if (chapter.depth === 1) {
        const element = document.getElementById(getIdFromUrl(chapter.url))
        if (element) {
          observer.observe(element)
        }
      }
    })

    return () => observer.disconnect()
  }, [chapters])

  return (
    <nav className="mb-8 flex items-center self-start pt-9" aria-label="Table of Contents">
      <ol className="list-none space-y-3">
        {chapters.map((item, index) => {
          if (item.depth < 3) {
            return <TocItem key={index} item={item} activeSlug={activeSlug} />
          }
        })}
      </ol>
    </nav>
  )
}

function getIdFromUrl(url) {
  return url.slice(1).replace(/-\d+$/, '') // Remove '#' and the trailing '-{number}'
}
