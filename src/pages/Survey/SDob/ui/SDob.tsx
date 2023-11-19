import { useState } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import sass from './SDob.module.sass'
import Arrow from './assets/arrow_back_ios.svg'
import Help from './assets/help.svg'
import { SFillingOutProfile } from '../../SFillingOutProfile'
import { Modal } from '../../../Modal'

export function SDob() {

  const [modalActive, setModalActive] = useState(false)
  const navigate = useNavigate()

  const navigateToSfop = () => {
    navigate('/survey/filling-out-profile')
  }

  return <>
    <div className={sass.background}>
      <div className={sass.container}>
        <div className={sass.sdBadges}>
          <Link to='/survey/interests' className={sass.arrow}><img src={Arrow} alt="" /></Link>
          <button onClick={() => setModalActive(true)} className={sass.help}><img src={Help} alt="" /></button>
        </div>
        <div className={sass.sdInner}>
          <div className={sass.sdText}>
            <h1>Nice to meet you, Artem.
            When is your birthday ?</h1>
            <p>Others will only see your age in your profile.</p>
          </div>
          <div className={sass.sbData}>
            <span>Day</span>
            <span>Month</span>
            <span>Year</span>
          </div>
          <div className={sass.sbDob}>
            <div className={sass.line}></div>
            <div className={sass.line2}></div>
          </div>
          <div className={sass.sbBtn}>
            <h3>This is data is protected.</h3>
            <button onClick={navigateToSfop}>Next</button>
            <Link to='/survey/filling-out-profile'>Skip</Link>
          </div>
          <div className={sass.contact}>
            <a href="">Contact Us</a>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
      <p>Hello, Dias</p>
    </Modal>
    </div>
    <Routes>
      <Route path='/survey/filling-out-profile' element={<SFillingOutProfile/>}/>
    </Routes>
  </>;
}
