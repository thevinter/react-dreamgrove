'use client'
import React, { useState, useEffect } from 'react'

const Checkbox = ({ id, spellId, name, defaultCheck = false }) => {
  const [checked, setChecked] = useState(defaultCheck)

  const handleToggle = (value: boolean) => {
    const elements = document.querySelectorAll<HTMLElement>(`#${id}`)
    elements.forEach((element) => {
      element.style.display = value ? 'list-item' : 'none'
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

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={toggle} />
        <a href={`https://www.wowhead.com/spell=${spellId}`} className="inline">
          {name}
        </a>{' '}
      </label>
    </div>
  )
}

export default Checkbox
