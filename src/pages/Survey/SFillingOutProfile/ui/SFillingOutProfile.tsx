import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import sass from './SFillingOutProfile.module.sass'
import Arrow from './assets/arrow_back_ios.svg'
import Help from './assets/help.svg'
import White from './assets/White.svg'
import Main from './assets/Main.svg'

export function SFillingOutProfile() {

  const navigate = useNavigate()

  const navigateToMg = () => {
    navigate('/Menu/MGamepad')
  }
  return <>
  <div className={sass.background}>
  <div className={sass.container}>
    <div className={sass.white}>
      <img src={White} alt="" />
    </div>
      <div className={sass.sfBadges}>
        <Link to='/survey/dob' className={sass.arrow}><img src={Arrow} alt="" /></Link>
        <a href="" className={sass.help}><img src={Help} alt="" /></a>
      </div>
      <div className={sass.sfInner}>
        <div className={sass.sfText}>
          <h1>Complete your profile by answering a few simple questions about yourself.</h1>
          <p>Create a profile that will increase your chances of finding your dream partner.</p>
        </div>
        <div className={sass.sfMain}>
          <img src={Main} alt="" />
        </div>
        <div className={sass.sfBtn}>
          <button onClick={navigateToMg}>Next</button>
          <a href="">Skip</a>
        </div>
        <div className={sass.contact}>
          <a href="">Contact Us</a>
        </div>
      </div>
    </div>
    </div>
    <Routes>
      <Route/>
    </Routes>
  </>;
}
