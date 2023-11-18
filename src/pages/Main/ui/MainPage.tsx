import { Routes, Route, useNavigate } from 'react-router-dom'
import { SingEmail } from '../../Registration/SingEmail';
import { SingPhone } from '../../Registration/SingPhone';
import sass from './MainPage.module.sass';
import { Registration } from '../../Registration';

export function MainPage() {

  const navigate = useNavigate()

  const navigateToSe = () => {
    navigate('/registration/sing-email')
  }

  const navigateToSp = () => {
    navigate('/registration/sign-phone')
  }

  const navigateToRegistration = () => {
    navigate('/registration')
  }
  
  return (
    <>
    <div className={sass.br}>
      <div className={sass.brText}>
        <h1>
          <img src="/src/pages/Main/ui/assets/Logo.svg" alt="GMLINK Logo" />
          GMLINK
        </h1>
        <h5>Don’t have an account ? </h5>
      </div>
    </div>
      <div className={sass.join}>
        <button>Join</button>
      </div>
      <div className={sass.container}>
        <div className={sass.mpInner}>
          <div className={sass.mpImg}>
            <img src="/src/pages/Main/ui/assets/mP--people.svg" alt="People" />
          </div>
          <div className={sass.mpBtns}>
            <button onClick={navigateToSp} className={sass.mpBtn}>Sign in Number</button>
            <button onClick={navigateToSe} className={sass.mpBtn}>Sign in Email</button>
          </div>
          <ul className={sass.mpLinks}>
            <li className={sass.mpLink}>
              <a href="">
                <img src="/src/pages/Main/ui/assets/Group 5.svg" alt="Discord" className={sass.discord} />
              </a>
            </li>
            <li className={sass.mpLink}>
              <a href="">
                <img src="/src/pages/Main/ui/assets/Group 6.svg" alt="Group 6" />
              </a>
            </li>
            <li className={sass.gLink}>
              <a href="">
                <img src="/src/pages/Main/ui/assets/Frame.svg" alt="Frame" />
              </a>
            </li>
            <li className={sass.mpLink}>
              <a onClick={navigateToRegistration} href="">
                <img src="/src/pages/Main/ui/assets/Group 8.svg" alt="Dots" className={sass.dots} />
              </a>
            </li>
          </ul>
          <div className={sass.brInContact}></div>
          <div className={sass.contact}>
            <a href="" className={sass.contactUs}>Contact Us</a>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/registration/sign-phone' element={<SingPhone/>}/>
        <Route path='/registration/sing-email' element={<SingEmail/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
      </>
  );
}


