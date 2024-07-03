'use client'
import React, { useState, useEffect } from 'react'

const Checkbox = ({ id, spellId = '', name, defaultCheck = false }) => {
  const [checked, setChecked] = useState(defaultCheck)

  const handleToggle = (value: boolean) => {
    const elements = document.querySelectorAll<HTMLElement>(`[id^="${id}"]`)
    const negativeElements = document.querySelectorAll<HTMLElement>(`[id^="!${id}"]`)
    elements.forEach((element) => {
      element.style.display = value ? 'list-item' : 'none'
    })
    negativeElements.forEach((element) => {
      element.style.display = value ? 'none' : 'list-item'
    })
  }

  const toggle = () => {
    setChecked((oldChecked) => {
      const newChecked = !oldChecked
      handleToggle(newChecked)
      return newChecked
    })
  }

  useEffect(() => {
    setChecked(defaultCheck)
    handleToggle(defaultCheck)
  }, [defaultCheck])

  if (spellId == '') {
    return (
      <p className="mb-2 mt-2">
        <label className="pr-24">
          <input type="checkbox" checked={checked} onChange={toggle} />
          {'      '}
          {name}{' '}
        </label>
      </p>
    )
  }

  return (
    <p className="mb-2 mt-2">
      <label className="pr-24">
        <input type="checkbox" checked={checked} onChange={toggle} />
        {'      '}
        <a href={`https://www.wowhead.com/spell=${spellId}`} className="inline">
          {name}
        </a>{' '}
      </label>
    </p>
  )
}

export default Checkbox
