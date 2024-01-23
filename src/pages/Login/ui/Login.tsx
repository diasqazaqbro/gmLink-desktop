import { LoginForm } from '../../../features/authentication/login'
import { Logo } from '../../../shared/ui/Icon/Icon'
import sass from './Login.module.sass'

export const Login = () => {

  return (
    <div className={sass.background}>
      <div className={sass.container}>
        <div className={sass.logo}>
          <Logo /> 
          <h1>GamELink</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}