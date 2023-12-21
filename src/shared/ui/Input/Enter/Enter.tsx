import React from 'react'
import sass from './Enter.module.sass'

interface EnterProps {
  value: string,
  onChange: () => void
}

export const Enter: React.FC<EnterProps> = ({ onChange, value, placeholder, type }) => {

  return (
    <input
      className={sass.enter}
      type={type} 
      autoComplete='off'
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}
