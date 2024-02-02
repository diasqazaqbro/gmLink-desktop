import { useState, ChangeEvent, FormEvent, useCallback, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import sass from './SName.module.sass'
import Main from './assets/main.svg'
import { Modal } from '../../../../shared/ui/Modal'
import { Button } from '../../../../shared/ui/Button/Button'
import { Input } from '../../../../shared/ui/Input/Input'
import { Badges } from '../../../../shared/ui/Badges/Badges'
import { Contact } from '../../../../shared/ui/Contact/Contact'

export const SName = memo(() => {
  const [modalActive, setModalActive] = useState(false)
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const isValid = () => {
    return name.trim() !== ''
  }

  const toogleModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setModalActive(!modalActive);
    e.preventDefault();
  }

  const styleLogic = useCallback(() => {
    return isValid() ? sass.active : ''
  }, [isValid])

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const navigateTo = () => {
    navigate('/registration/password');
  }

  return (
    <>
      <div className={sass.background}>
        <Badges 
          routePath='/registration/sing-email' 
          onClick={toogleModal}
          className={sass.badge}
        />
        <div className={sass.container}>
          <div className={sass.inner}>
            <div className={sass.text}>
              <h1>Let's get acquainted ! What is your name ?</h1>
              <p>Other users will see you under this name. You can change it in the future</p>
            </div>
            <div className={sass.main}>
              <img src={Main} alt="main" loading='lazy'/>
            </div>
            <form
              action=""
              className={sass.input}
              onSubmit={(event: FormEvent<HTMLFormElement>) => {
                event.preventDefault()
                if (isValid()) {
                  navigateTo()
                }
              }}
            >
              <Input className={sass.enter} onChange={handleNameChange} onClear={() => setName('')} placeholder='Enter your name' value={name} type='text' >
                <Button label='Next' onClick={navigateTo} className={`${sass.next} ${styleLogic()}`} disabled={!isValid()} />
              </Input>
            </form>
            <Contact 
              label='Contact Us'
              routePath='/report'
            />
          </div>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <p>Hello, Dias</p>
        </Modal>
      </div>
    </>
  )
})