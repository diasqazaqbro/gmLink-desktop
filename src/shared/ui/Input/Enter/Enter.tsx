import { FC} from 'react'

import cn from "classnames"

import sass from './Enter.module.sass'

interface EnterProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  className: string;
}

export const Enter: FC<EnterProps> = ({ onChange, value, placeholder, type, className }) => {

  return (
    <input
      className={cn(className, sass.input, "input")}
      type={type} 
      autoComplete='off'
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
