import { FC, FocusEventHandler, memo} from 'react'

import cn from "classnames"

import sass from './Enter.module.sass'

interface EnterProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  id?: string;
  onBlur?: FocusEventHandler;
  name?: string;
  className?: string;
}

export const Enter: FC<EnterProps> = memo(({ onChange, value, placeholder, type, className, id, onBlur, name }) => {

  return (
    <input
      className={cn(className, sass.input, "input")}
      type={type} 
      autoComplete='off'
      id={id}
      onBlur={onBlur}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
})
