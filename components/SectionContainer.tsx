import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="xl:max-w-8xl mx-auto max-w-6xl px-4 sm:px-6 xl:px-0">{children}</section>
  )
}
