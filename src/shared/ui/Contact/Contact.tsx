import { Link } from 'react-router-dom'
import sass from './Contact.module.sass'
import { FC } from 'react';

interface ContactProps {
  label: string;
  routePath: string;
}

export const Contact: FC<ContactProps> = (props) => {
  const { label, routePath } = props

  return (
    <div className={sass.contact}>
      <Link 
        to={routePath}
      >
        {label}
      </Link>
    </div>
  )
}