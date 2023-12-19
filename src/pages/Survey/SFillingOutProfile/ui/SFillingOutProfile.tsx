import { FormEvent, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import sass from './SFillingOutProfile.module.sass'
import White from './assets/White.svg'
import Main from './assets/Main.svg'
import { Modal } from '../../../../shared/ui/Modal'
import { Badges } from '../../../../shared/ui/Badges/Badges'

export function SFillingOutProfile() {

  const [modalActive, setModalActive] = useState(false)
  const navigate = useNavigate()

  const toogleModal = (e: FormEvent) => {
    setModalActive(!modalActive)
    e.preventDefault()
  }

  const navigateToMg = () => {
    navigate('/Menu/MGamepad')
  }
  return <>
  <div className={sass.background}>
  <div className={sass.container}>
    <div className={sass.white}>
      <img src={White} alt="" />
    </div>
      <Badges 
        routePath='/registraion/data-of-birth' 
        toogleModal={toogleModal}
      />
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
    <Modal active={modalActive} setActive={setModalActive}>
      <p>Hello, Dias</p>
    </Modal>
    </div>
    <Routes>
      <Route/>
    </Routes>
  </>;
}
