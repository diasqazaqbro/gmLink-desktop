import { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import sass from './SingEmail.module.sass'
import Main from './assets/enter__email-main.svg'
import WhiteBlock from './assets/white.svg'
import { Modal } from '../../../../shared/ui/Modal'
import { Badges } from '../../../../shared/ui/Badges/Badges'
import { Contact } from '../../../../shared/ui/Contact/Contact'
import { Input } from '../../../../shared/ui/Input/Input'
import { Button } from '../../../../shared/ui/Button/Button'

export function SingEmail() {

  const [modalActive, setModalActive] = useState(false)
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate(`/verification/email/${email}`)
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const isValid = () => {
    return email.includes('@');
  }

  const styleLogic = () => {
    return isValid() ? sass.active : ''
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isValid()) {
      navigateTo()
    }
  }

  return <>
  <div className={sass.background}>
    <Badges 
      routePath='/main'
      onClick={() => setModalActive(!modalActive)}
      className={sass.badge}
    />
    <div className={sass.container}>
      <div className={sass.whiteBlock}>
        <img src={WhiteBlock} alt="" />
      </div>
      <div className={sass.inner}>
        <h1 className={sass.title}>Please enter your Email</h1>
        <div className={sass.draw}>
          <img src={Main} alt="" loading='lazy' />
        </div>
        <form className={sass.auth} onSubmit={handleSubmit} >
          <Input className={sass.enter} onChange={handleEmailChange} onClear={() => setEmail('')} placeholder='Enter your email' value={email} type='email' >
            <Button label='Next' className={`${sass.next} ${styleLogic()}`} onClick={navigateTo} disabled={!isValid()}/>
          </Input>
        </form>
      </div>
      <Contact 
        label='Contact Us'
        routePath='/report'
      />
    </div>
    <Modal active={modalActive} setActive={setModalActive}>
      <p>Hello, Dias</p>
    </Modal>
    </div>
  </>;
}
