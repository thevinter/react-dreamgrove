'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && !loaded) {
      const script = document.createElement('script')
      script.src = 'https://wow.zamimg.com/widgets/power.js'
      script.async = true
      const script1 = document.createElement('script')
      script1.text = `
        const whTooltips = {
          colorLinks: true,
          iconizeLinks: true,
          renameLinks: true
        };
      `
      document.body.appendChild(script1)
      document.body.appendChild(script)
      setLoaded(true)

      return () => {
        document.body.removeChild(script1)
        document.body.removeChild(script)
      }
    }
  }, [loaded])
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProvider>
  )
}
