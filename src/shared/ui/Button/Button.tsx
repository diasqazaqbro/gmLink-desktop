import React, { MouseEventHandler } from 'react'

import cn from "classnames"

import sass from './Button.module.sass'

export type ButtonProps = {
  onClick?: MouseEventHandler;
  label: string;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, label, disabled, className } = props

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



