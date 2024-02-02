import { useState, ChangeEvent, FormEvent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import sass from './SingPhone.module.sass'
import Main from './assets/enter__email-main.svg'
import WhiteBlock from './assets/white.svg'
import { Modal } from '../../../../shared/ui/Modal'
import { Badges } from '../../../../shared/ui/Badges/Badges'
import { Button } from '../../../../shared/ui/Button/Button'
import { Input } from '../../../../shared/ui/Input/Input'
import { Contact } from '../../../../shared/ui/Contact/Contact'

export function SingPhone () {
  const [modalActive, setModalActive] = useState(false)
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')

  const navigateTo = () => {
    navigate(`/verification/phone/${phone}`)
  }

  const isValid = () => {
    return phone.replace(/\D/g, '').length === 11
  }

  const onClear = () => {
    setPhone('')
  }

  const handlePhoneChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value.replace(/\D/g, '');
    if (input.length > 11) {
      input = input.slice(0, 11);
    }
    setPhone(input);
  }, [])

  return <>
  <div className={sass.background}>
    <Badges 
      routePath='/main'
      onClick={() => setModalActive(!modalActive)}
      className={sass.badge}
    />
    <div className={sass.container}>
      <div className={sass.whiteBlock}>
        <img src={WhiteBlock} alt="" loading='lazy' />
      </div>
      <div className={sass.inner}>
        <h1 className={sass.title}>Please enter your Phone</h1>
        <div className={sass.draw}>
          <img src={Main} alt="" loading='lazy' />
        </div>
        <form 
            action="" 
            className={sass.auth}
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              event.preventDefault()
              if (isValid()) {
                navigateTo();
              }
            }}
          >
        <Input className={sass.enter} onChange={handlePhoneChange} value={phone} placeholder='Enter your number' onClear={onClear} type='tel' >
          <Button label='Next' className={`${sass.next} ${isValid() ? sass.active : ''}`} onClick={navigateTo} disabled={!isValid()} />
        </Input>
        </form>
        <Contact 
          label="Contact Us"
          routePath='/report'
        />
      </div>
    </div>
    <Modal active={modalActive} setActive={setModalActive}>
      <p >Hello, Dias</p>
    </Modal>
    </div>
  </>
}
