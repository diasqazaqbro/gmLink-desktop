import { Link } from 'react-router-dom'
import { LoginForm } from '../../../features/authentication/login'
import { Button } from '../../../shared/ui/Button/Button'
import { Logo } from '../../../shared/ui/Icon/Icon'
import sass from './Login.module.sass'

export const Login = () => {

  return (
    <div className={sass.background}>
      <div className={sass.container}>
        <div className={sass.inner}>
          <div className={sass.logo}>
            <Logo /> 
            <h1>GameLink</h1>
          </div>
          <LoginForm />
          <div className={sass.btn__container}>
            <Button className={sass.btn} disabled={true} label='Next' />
          </div>
          <Link to={''} className={sass.frg}>
            Forget your password ?
          </Link>
        </div>
      </div>
    </div>
  )
}