import { FormEvent } from 'react'
import { useState } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import sass from './SDob.module.sass'
import { SFillingOutProfile } from '../../SFillingOutProfile'
import { Modal } from '../../../../shared/ui/Modal'
import { Badges } from '../../../../shared/ui/Badges/Badges'

export function SDob() {

  const [modalActive, setModalActive] = useState(false)
  const navigate = useNavigate()

  const toogleModal = (e: FormEvent<HTMLFormElement>) => {
    setModalActive(!modalActive)
    e.preventDefault()
  }

  const navigateTo = () => {
    navigate('/registration/filling-out-profile')
  }

  return <>
    <div className={sass.background}>
      <div className={sass.container}>
        <Badges 
          routePath='/registration/interests'
          toogleModal={toogleModal}
        />
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
            <button onClick={navigateTo}>Next</button>
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
