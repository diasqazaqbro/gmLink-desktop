import { FormEvent } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import sass from './SDob.module.sass'
import { Modal } from '../../../../shared/ui/Modal'
import { Badges } from '../../../../shared/ui/Badges/Badges'
import { Contact } from '../../../../shared/ui/Contact/Contact'
import { Button } from '../../../../shared/ui/Button/Button'
import { DataPicker } from '../../../../features/data-picker'

export function SDob() {
  const [modalActive, setModalActive] = useState(false)
  const navigate = useNavigate()

  const toogleModal = (e: FormEvent) => {
    setModalActive(!modalActive)
    e.preventDefault()
  }

  const navigateTo = () => {
    navigate('/registration/filling-out-profile')
  }

  return <>
    <div className={sass.background}>
      <Badges 
        routePath='/registration/interests'
        onClick={toogleModal}
        className={sass.badge}
      />
      <div className={sass.container}>
        <div className={sass.inner}>
          <div className={sass.text}>
            <h1>Nice to meet you, Artem.
            When is your birthday ?</h1>
            <p>Others will only see your age in your profile.</p>
          </div>
          <DataPicker />
          <div className={sass.btn}>
            <h3>This is data is protected.</h3>
            <Button 
              onClick={navigateTo}
              label='Next'
              className={sass.next}
              disabled={false}
            />
            <Link to='/survey/filling-out-profile'>Skip</Link>
          </div>
          <Contact 
            label="Contact Us"
            routePath='/report'
          />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Hello, Dias</p>
      </Modal>
    </div>
  </>;
}
