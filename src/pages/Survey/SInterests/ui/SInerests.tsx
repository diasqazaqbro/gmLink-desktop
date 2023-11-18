import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import sass from './SInterests.module.sass'
import Arrow from './assets/arrow_back_ios.svg'
import Help from './assets/help.svg'
import Cup from './assets/uI_cup.svg'
import Heart from './assets/uI_heart.svg'
import Massages from './assets/uI_massages.svg'
import { SDob } from '../../SDob'

export function SInterests() {

  const navigate = useNavigate()

  const navigateToSdob = () => {
    navigate('/survey/dob')
  }

  return <>
    <div className={sass.background}>
      <div className={sass.container}>
        <div className={sass.siBadges}>
          <Link to='/survey/gender' className={sass.arrow}><img src={Arrow} alt="" /></Link>
          <a href="" className={sass.help}><img src={Help} alt="" /></a>
        </div>
        <div className={sass.siInner}>
          <div className={sass.siText}>
            <h1>What interests you first?</h1>
            <p>Tell others what you expect from online dating. You can always change your answer if you change your mind.</p>
          </div>
          <div className={sass.siCards}>
            <div className={sass.siCard}>
              <img src={Cup} alt="" className={sass.cup}/>
              <div className={sass.cardText}>
                <h1>Assemble a team</h1>
                <p className={sass.text1}>Find people to conquer new heights in games.</p>
              </div>
              <div className={sass.line}>
                <a href="#" className={sass.circle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <circle cx="15" cy="15" r="14.5" fill="white" stroke="black"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className={sass.siCard}>
            <img src={Massages} alt="" className={sass.massages}/>
              <div className={sass.cardText}>
                <h1>Just a chatting</h1>
                <p className={sass.text2}>Let's start with chatting - then we'll see.</p>
              </div>
              <div className={sass.line2}>
                <a href="#" className={sass.circle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <circle cx="15" cy="15" r="14.5" fill="white" stroke="black"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className={sass.siCard}>
            <img src={Heart} alt="" className={sass.heart} />
              <div className={sass.cardText}>
                <h1>Find love</h1>
                <p className={sass.text3}>I want to find a relationship.</p>
              </div>
              <div className={sass.line}>
                <a href="#" className={sass.circle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <circle cx="15" cy="15" r="14.5" fill="white" stroke="black"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={sass.siBtn}>
            <button onClick={navigateToSdob}>Next</button>
          </div>
          <div className={sass.contact}>
            <a href="">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    <Routes>
      <Route path='/survey/dob' element={<SDob/>}/>
    </Routes>
  </>;
}
