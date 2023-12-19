import React from 'react'
import sass from './Button.module.sass'

interface ButtonProps {
  onClick: () => void
  label: string
  styleLogic: () => boolean
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ onClick, label, styleLogic, disabled }) => {
  const buttonStylesClass = styleLogic() ? sass.active : ''

  return (
    <button 
      className={`${sass.next} ${buttonStylesClass}`}
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  )
}



