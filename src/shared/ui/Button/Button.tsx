import React from 'react'

import cn from "classnames"

import sass from './Button.module.sass'

interface ButtonProps {
  onClick: () => void
  label: string
  styleLogic: () => boolean
  disabled?: boolean,
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ onClick, label, disabled, className }) => {

  return (
    <button
      className={cn(className, sass.button, "button")}
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  )
}



