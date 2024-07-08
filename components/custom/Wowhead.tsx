import fetch from 'node-fetch'
import data from '../../data.json'

import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Image from 'next/image'

function formatUrl(url) {
  const parts = url.split('/')
  const lastPart = parts.pop()
  const formatted = lastPart
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
  return formatted
}

function extractIdFromUrl(url) {
  const parts = url.split('/')
  const lastPart = parts[parts.length - 1]
  const id = lastPart.split('-')[0]
  return id
}

const qualityToColor = {
  1: '#ffffff',
  2: '#1eff00',
  3: '#0070dd',
  4: '#a335ee',
  5: '#ff8000',
}

/*This whole component is retarded because wowhead is retarded*/

export default async function Wowhead({ id, name, type, disabled = false }) {
  let display = name
  let displayId = id
  let imageUrl = ''
  let linkColor = '#d57f43'
  let quality = -1

  if (!id && type == 'spell') {
    const url = data[name]
    if (url) {
      displayId = extractIdFromUrl(url)
    } else {
      throw Error(`${name} not found in local spelldata`)
    }
  }

  const res = await fetch(`https://www.wowhead.com/${type}=${displayId}`)
  const text = await res.text()

  const regex = new RegExp(`"${displayId}":\\{"name_enus":"[^"]+".*?,"icon":"([^"]+)"`)

  const match = regex.exec(text)

  if (match && match[1]) {
    const iconFilename = match[1]
    imageUrl = `https://wow.zamimg.com/images/wow/icons/large/${iconFilename}.jpg`
  } else {
    throw Error('Icon not found for ' + displayId)
  }

  if (type == 'item') {
    const qualityRegex = /<b class=\\"q(\d+)\\">/
    const qualityMatch = text.match(qualityRegex)

    if (qualityMatch && qualityMatch[1]) {
      linkColor = qualityToColor[qualityMatch[1]]
      quality = qualityMatch[1]
    }
  }

  if (!name) {
    display = formatUrl(res.url)
  }

  return (
    <>
      {disabled ? (
        <div className={`inline decoration-2 q${quality}`} style={{ color: linkColor }}>
          <Image
            src={imageUrl}
            alt={`${display} icon`}
            width={16}
            height={16}
            className="my-0 mr-1 inline-block"
          />
          <span className="align-middle">{display}</span>
        </div>
      ) : (
        <a
          href={`https://www.wowhead.com/${type}=${displayId}`}
          className={`inline decoration-2 q${quality}`}
          style={{ color: linkColor, marginBottom: '1px', textWrap: 'nowrap' }}
        >
          <Image
            src={imageUrl}
            alt={`${display} icon`}
            width={16}
            height={16}
            className="my-0 mr-1 inline-block"
          />
          <span className="mr-1 text-balance">{display}</span>
        </a>
      )}
    </>
  )
}
