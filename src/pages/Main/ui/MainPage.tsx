import { Link, useNavigate } from 'react-router-dom'
import sass from './MainPage.module.sass';
import Logo from './assets/Logo.svg'
import People from './assets/mP--people.svg'
import Discord from './assets/Group 5.svg'
import Dots from './assets/Group 8.svg'
import Steam from './assets/Group 6.svg'
import Google from './assets/Frame.svg'

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
          <img src={Logo} alt="GMLINK Logo" />
          GMLINK
        </h1>
        <h5 >Don’t have an account ? </h5>
      </div>
    </div>
      <div className={sass.join}>
        <button>Join</button>
      </div>
      <div className={sass.container}>
        <div className={sass.mpInner}>
          <div className={sass.mpImg}>
            <img src={People} alt="People" />
          </div>
          <div className={sass.mpBtns}>
            <button onClick={navigateToSp} className={sass.mpBtn}>Sign in Number</button>
            <button onClick={navigateToSe} className={sass.mpBtn}>Sign in Email</button>
          </div>
          <ul className={sass.mpLinks}>
            <li className={sass.mpLink}>
              <a href="">
                <img src={Discord} alt="Discord" className={sass.discord} />
              </a>
            </li>
            <li className={sass.mpLink}>
              <a href="">
                <img src={Steam} alt="Group 6" />
              </a>
            </li>
            <li className={sass.gLink}>
              <a href="">
                <img src={Google} alt="Frame" />
              </a>
            </li>
            <li className={sass.mpLink}>
              <a onClick={navigateToRegistration} href="">
                <img src={Dots} alt="Dots" className={sass.dots} />
              </a>
            </li>
          </ul>
          <div className={sass.brInContact}></div>
          <div className={sass.contact}>
            <Link to="/report" className={sass.contactUs}>Contact Us</Link>
          </div>
        </div>
      </div>
      </>
  );
}


