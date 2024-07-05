'use client'
import { ReactNode, useEffect, useState } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  const [x, sX] = useState(false)
  /*useEffect(() => {
    const script = document.createElement('script')

    const scriptId = 'zam-widget-script'
    const existingScript = document.getElementById(scriptId)

    if (!existingScript) {
      console.log('adding')
      script.src = 'https://wow.zamimg.com/widgets/power.js'
      script.id = scriptId
      script.async = true
      document.body.appendChild(script)
    } else {
      console.log('script already loaded')
      const toRemove = document.getElementById(scriptId)
      if (toRemove) {
        console.log('removing')
        //document.body.removeChild(toRemove)
      }
    }
  }, [])*/
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
