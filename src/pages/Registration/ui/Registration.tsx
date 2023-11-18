import { Link } from 'react-router-dom'
import sass from './Registration.module.sass'
import Logo from './assets/Logo.svg'
import Discord from './assets/Discord.svg'
import Steam from './assets/Steam.svg'
import Google from './assets/Google.svg'
import Apple from './assets/Apple.svg'
import Facebook from './assets/Facebook.svg'

export function Registration() {
  return <>
      <div className={sass.br}>
        <div className={sass.brText}>
          <h1>
            <img src={Logo} alt="GMLINK Logo" />
            GMLINK
          </h1>
          <h5>Don’t have an account ? </h5>
        </div>
      </div>
      <div className={sass.join}>
        <button>Join</button>
      </div>
    <div className={sass.container}>
      <div className={sass.regInner}>
        <div className={sass.regBox}>
          <div className={sass.boxEnd}>
            <Link to='/main'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="26" viewBox="0 0 18 26" fill="none">
                <mask id="mask0_0_132" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="26">
                <rect y="0.230103" width="17.7946" height="25" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_0_132)">
                <path d="M10.4167 23.1468L0 12.7301L10.4167 2.31342L12.2656 4.16238L3.69792 12.7301L12.2656 21.2978L10.4167 23.1468Z" fill="white"/>
                </g>
              </svg>
            </Link>
          </div>
          <div className={sass.regCards}>
            <button className={sass.regCard}>
              <h1 className={sass.ds}>Discord</h1>
              <a href=""><img src={Discord} alt="" /></a>
            </button>
            <button className={sass.regCard}>
              <h1 className={sass.st}>Steam</h1>
              <a href=""><img src={Steam} alt="" /></a>
            </button>
            <button className={sass.regCard}>
              <h1 className={sass.gog}>Google</h1>
              <a href="" className={sass.google}><img src={Google} alt="" /></a>
            </button>
            <button className={sass.regCard}>
              <h1 className={sass.apl}>Apple</h1>
              <a href="" className={sass.apple}><img src={Apple} alt="" /></a>
            </button>
            <button className={sass.regCard}>
              <h1 className={sass.fb}>Facebook</h1>
              <a href="" className={sass.facebook}><img src={Facebook} alt="" /></a>
            </button>
          </div>
        </div>
        <div className={sass.brInContact}></div>
        <div className={sass.contact}>
          <a href="" className={sass.contactUs}>Contact Us</a>
        </div>
      </div>
    </div>
  </>;
}
