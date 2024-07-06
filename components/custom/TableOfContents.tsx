'use client'
import { clsx, type ClassValue } from 'clsx'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

const TocItem = ({ item }) => {
  return (
    <li
      className="my-2"
      style={{
        marginLeft: `${(item.depth - 1) * 25}px`,
        marginTop: '8px',
        fontWeight: `${item.depth == 1 ? 'bold' : 'normal'}`,
      }}
    >
      <a href={item.url.replace(/-\d+$/, '')} dangerouslySetInnerHTML={{ __html: item.value }} />
    </li>
  )
}

export default function TableOfContents({ chapters }) {
  const [activeSlug, setActiveSlug] = useState('')

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
        rootMargin: '-30% 0px',
      }
    )

    chapters.forEach((chapter) => {
      const element = document.getElementById(chapter.slug)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [chapters])

  return (
    <nav className="mb-8 flex items-center self-start pt-14" aria-label="Table of Contents">
      <ol className="list-none space-y-3">
        {chapters.map((item, index) => {
          if (item.depth < 3) {
            return <TocItem key={index} item={item} />
          }
        })}
      </ol>
    </nav>
  )
}
