import { Link } from 'react-router-dom'
import sass from './Contact.module.sass'

export const Contact = ({ label, routePath }) => {
  
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