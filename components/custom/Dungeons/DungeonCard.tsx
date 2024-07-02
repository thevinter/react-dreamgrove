/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
export default function DungeonCard({ title, children }) {
  return (
    <div className="mb-6 flex w-full rounded-lg border border-gray-300 shadow-lg">
      <div className="relative w-1/4">
        <Image
          src="/static/images/talents/balance.png"
          layout="fill"
          objectFit="cover"
          alt="Image"
          className="my-0 h-full w-full rounded-l-lg object-cover"
        />
      </div>
      <div className="flex w-3/4 flex-col justify-center p-4">
        <h2 className="mb-2 mt-0 text-lg font-bold">{title}</h2>
        <div className="text-white-700">{children}</div>
      </div>
    </div>
  )
}
