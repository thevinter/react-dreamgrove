'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'
import Script from 'next/script'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && !loaded) {
      const script1 = document.createElement('script')
      script1.text = `
        const whTooltips = {
          colorLinks: true,
          iconizeLinks: true,
          renameLinks: true
        };
      `
      document.body.appendChild(script1)
      setLoaded(true)

      return () => {
        document.body.removeChild(script1)
      }
    }
  }, [loaded])
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      <Script src="https://wow.zamimg.com/widgets/power.js" strategy="afterInteractive" />
      {children}
    </ThemeProvider>
  )
}
