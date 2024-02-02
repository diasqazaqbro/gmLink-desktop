import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import sass from './SFillingOutProfile.module.sass'
import White from './assets/White.svg'
import Main from './assets/Main.svg'
import { Modal } from '../../../../shared/ui/Modal'
import { Badges } from '../../../../shared/ui/Badges/Badges'
import { Button } from '../../../../shared/ui/Button/Button'
import { Contact } from '../../../../shared/ui/Contact/Contact'
import { Loading } from '../../../../shared/ui/Loading/Loading'

export function SFillingOutProfile() {
  const [modalActive, setModalActive] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const toogleModal = (e: FormEvent) => {
    setModalActive(!modalActive)
    e.preventDefault()
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 5000)
  }, [])

  const navigateTo = () => {
    navigate('/Menu/MGamepad')
  }
  
  return <>
    <div className={sass.background}>
      {loading ? <Loading text='Wait a few seconds, the data is saved' /> : (
        <>
          <Badges 
            routePath='/registration/dob' 
            onClick={toogleModal}
            className={sass.badge}
          />
          <div className={sass.container}>
            <div className={sass.white}>
              <img src={White} loading='lazy' />
            </div>
            <div className={sass.inner}>
              <div className={sass.text}>
                <h1>Complete your profile by answering a few simple questions about yourself.</h1>
                <p>Create a profile that will increase your chances of finding your dream partner.</p>
              </div>
              <div className={sass.main}>
                <img src={Main} alt="main" loading='lazy' />
              </div>
              <div className={sass.btn}>
                <Button 
                  label='Next'
                  onClick={navigateTo}
                  className={sass.next}
                  disabled={false}
                />
                <a href="">Skip</a>
              </div>
              <Contact 
                label="Contact Us"
                routePath='/report'
              />
            </div>
          </div>
        </>
      )}
        <Modal active={modalActive} setActive={setModalActive}>
          <p>Hello, Dias</p>
        </Modal>
      </div>
  </>;
}
