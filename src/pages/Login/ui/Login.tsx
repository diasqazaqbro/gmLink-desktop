import { Link } from 'react-router-dom'
import { LoginForm } from '../../../features/authentication/login'
import { Button } from '../../../shared/ui/Button/Button'
import { Apple, Facebook, Google, Logo } from '../../../shared/ui/Icon/Icon'
import sass from './Login.module.sass'

export const Login = () => {

  return (
    <div className={sass.background}>
      <div className={sass.container}>
        <div className={sass.inner}>
          <div className={sass.logo}>
            <Logo /> {/* БЛЯ, надеюсь я не единственный далбаеб? мне кажется что лого похожа на попу (ЧЕ ЗА ХУЙНЯ АРТЕМ ГДЕ ТЫ ЛОГО ИСКАЛ) */}
            <h1>GameLink</h1>
          </div>
          <LoginForm />
          <div className={sass.btn__container}>
            <Button className={sass.btn} disabled={true} label='Next' />
          </div>
          <Link to={''} className={sass.frg}>
            Forget your password ?
          </Link>
          <div className={sass.other_sign}>
            <div className={sass.liner}></div> <h1>or sign up with</h1> <div className={sass.liner}></div>
          </div>
          <ul className={sass.sign_links}>
            <li><a href="Google.com"><Facebook /></a></li>
            <li><a href=""><Google /></a></li>
            <li><a href="" className={sass.apple} ><Apple /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}