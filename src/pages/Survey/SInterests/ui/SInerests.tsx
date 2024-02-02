import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import sass from './SInterests.module.sass'
import Cup from './assets/uI_cup.svg'
import Heart from './assets/uI_heart.svg'
import Massages from './assets/uI_massages.svg'
import { Modal } from '../../../../shared/ui/Modal'
import { Badges } from '../../../../shared/ui/Badges/Badges'
import { Button } from '../../../../shared/ui/Button/Button'
import { Contact } from '../../../../shared/ui/Contact/Contact'

export function SInterests() {
  const [modalActive, setModalActive] = useState(false)
  const navigate = useNavigate()

  const toogleModal = (e: FormEvent) => {
    setModalActive(!modalActive)
    e.preventDefault()
  }

  const navigateTo = () => {
    navigate('/registration/dob')
  }

  return <>
    <div className={sass.background}>
      <Badges 
        routePath='/registration/gender'
        onClick={toogleModal}
        className={sass.badge}
      />
      <div className={sass.container}>
        <div className={sass.inner}>
          <div className={sass.text}>
            <h1>What interests you first?</h1>
            <p>Tell others what you expect from online dating. You can always change your answer if you change your mind.</p>
          </div>
          <div className={sass.cards}>
            <div className={sass.card}>
              <img src={Cup} alt="" className={sass.cup} loading='lazy' />
              <div className={sass.cardText}>
                <h1>Assemble a team</h1>
                <p className={sass.text1}>Find people to conquer new heights in games.</p>
              </div>
              <div className={sass.line}>
                <div>
                <a href="#" className={sass.circle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <circle cx="15" cy="15" r="14.5" fill="white" stroke="black"/>
                  </svg>
                </a>
                </div>
                
              </div>
            </div>
            <div className={sass.card}>
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
            <div className={sass.card}>
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
          <Button 
            onClick={navigateTo}
            className={sass.next}
            label='Next'
            disabled={false}
          />
          <Contact 
            label="Contact Us"
            routePath={'/report'}
          />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
      <p>Hello, Dias</p>
    </Modal>
    </div>
  </>;
}
