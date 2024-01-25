import { FC, FormEvent } from 'react';
import sass from './Delete.module.sass'

interface DeleteProps {
  onClear?: (e: FormEvent) => void;
}

export const Delete: FC<DeleteProps> = (props) => {
  const { onClear } = props
  return (
    <a href="" className={sass.delete} onClick={onClear}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
        <circle cx="8.54296" cy="8.49999" r="8.49999" fill="#D9D9D9"/>
        <path d="M8.54297 9.71429L4.90011 13.3571L3.68583 12.1429L7.32868 8.5L3.68583 4.85714L4.90011 3.64286L8.54297 7.28571L12.1858 3.64286L13.4001 4.85714L9.75725 8.5L13.4001 12.1429L12.1858 13.3571L8.54297 9.71429Z" fill="#1C1B1F"/>
      </svg>
    </a>
  )
}