import { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import sass from './SingPhone.module.sass'
import Main from './assets/enter__email-main.svg'
import WhiteBlock from './assets/white.svg'
import { Modal } from '../../../../shared/ui/Modal'
import { Badges } from '../../../../shared/ui/Badges/Badges'
import { Button } from '../../../../shared/ui/Button/Button'
import { Input } from '../../../../shared/ui/Input/Input'

export function SingPhone() {

  const [modalActive, setModalActive] = useState(false)
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')

  const navigateTo = () => {
    navigate('/registration/name')
  }

  const isValid = () => {
    return phone.replace(/\D/g, '').length >= 11
  }

  const styleLogic = () => {
    return isValid()
  }

  const onClear = () => {
    setPhone('')
  }

  const toogleModal = (e) => {
    setModalActive(!modalActive)
    e.preventDefault()
  }

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.replace(/\D/g, '');
    setPhone(input);
  };
  
  return <>
  <div className={sass.background}>
    <div className={sass.container}>
      <div className={sass.whiteBlock}>
        <img src={WhiteBlock} alt="" />
      </div>
      <Badges 
        routePath='/main'
        toogleModal={toogleModal}
      />
      <div className={sass.spInner}>
        <h1 className={sass.spTitle}>Please enter your Phone</h1>
        <div className={sass.spDraw}>
          <img src={Main} alt="" />
        </div>
        <form 
            action="" 
            className={sass.spAuth}
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              event.preventDefault()
              if (isValid()) {
                navigateTo();
              }
            }}
          >
        <Input onChange={handlePhoneChange} value={phone} placeholder='Enter your number' onClear={onClear} >
          <Button label='Next' onClick={navigateTo} styleLogic={styleLogic} disabled={!isValid()} />
        </Input>
        </form>
        <a href="" className={sass.spContact}>Contact Us</a>
      </div>
    </div>
    <Modal active={modalActive} setActive={setModalActive}>
      <p>Hello, Dias</p>
    </Modal>
    </div>
  </>
}
