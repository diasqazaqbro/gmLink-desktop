import { Link } from 'react-router-dom'
import sass from './Contact.module.sass'
import { FC } from 'react';
import cn from 'classnames';

interface ContactProps {
  label: string;
  routePath: string;
  className?: string;
}

export const Contact: FC<ContactProps> = (props) => {
  const { label, routePath,className } = props

  return (
    <div className={cn(className, sass.contact, 'contact')}>
      <Link 
        to={routePath}
      >
        {label}
      </Link>
    </div>
  )
}