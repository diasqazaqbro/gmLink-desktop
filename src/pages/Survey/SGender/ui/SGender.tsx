import { FormEvent, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'
import sass from './SGender.module.sass'
import { Modal } from '../../../../shared/ui/Modal'
import { Badges } from '../../../../shared/ui/Badges/Badges'
import { Button } from '../../../../shared/ui/Button/Button'
import { Enter } from '../../../../shared/ui/Input/Enter/Enter'
import { Delete } from '../../../../shared/ui/Input/Delete/Delete'

export function SGender() {
  const [modalActive, setModalActive] = useState(false)
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [selectedGender, setSelectedGender] = useState('')
  const [isOtherSelected, setIsOtherSelected] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [otherInput, setOtherInput] = useState('')

  const navigateTo = () => {
    navigate('/registration/interests')
  }

  const toogleModal = (e: FormEvent) => {
    e.preventDefault()
    setModalActive(!modalActive)
  }

  const styleLogic = () => {
    return 
  }

  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender)
    setShow(!show)

    if (isOtherSelected) {
      setIsOtherSelected(false)
      setFormVisible(false)
    }
  }

  const handleOtherClick = () => {
    setIsOtherSelected(true)
    setFormVisible(true)
    setSelectedGender('Other')
  }

  const handleClearClick = (e: FormEvent) => {
    e.preventDefault()
    setOtherInput('')
  }

  const renderNextButton = () => {
    if (isOtherSelected) {
      return (
        <form
          action=''
          className={`${sass.input} ${formVisible ? sass.formVisible : ''}`}
        >
          <div className={sass.et}>
            <Enter 
              placeholder='Enter if other'
              value={otherInput}
              className={sass.enter}
              onChange={(e) => setOtherInput(e.target.value)} type={''} />
            {otherInput && (
              <Delete
                onClear={handleClearClick}
              />
            )}
          </div>
          <div className={sass.btn}>
            <Button 
              onClick={navigateTo}
              label='Next'
              className={`${sass.next} ${styleLogic()}`} />
          </div>
        </form>
      )
    } else if (selectedGender === 'Male' || selectedGender === 'Female' || selectedGender === 'Other') {
      return (
        <form 
          className={sass.input}
        >
          <div className={sass.btn}>
            <CSSTransition in={show} timeout={10000000} classNames='alert' unmountOnExit>
              <Button 
                onClick={navigateTo}
                label='Next'
                className={`${sass.next} ${styleLogic()}`}
              />
            </CSSTransition>
          </div>
        </form>
      )
    } else {
      return null
    }
  };

  return (
    <>
      <div className={sass.background}>
        <Badges 
          routePath='/registration/photo'
          onClick={toogleModal}
          className={sass.badge}
        />
        <div className={sass.container}>
          <div className={sass.inner}>
            <div className={sass.text}>
              <h1>Your gender...</h1>
              <p>This information is needed to correctly determine the pair for you.</p>
            </div>
            <div className={sass.choice}>
              <button
                className={`${sass.male} ${selectedGender === 'Male' ? sass.active : ''}`}
                onClick={() => handleGenderClick('Male')}
              >
                Male
              </button>
              <button
                className={`${sass.female} ${selectedGender === 'Female' ? sass.active : ''}`}
                onClick={() => handleGenderClick('Female')}
              >
                Female
              </button>
            </div>
            <div className={sass.choice2}>
              <span>or</span>
              <button
                className={`${sass.other} ${selectedGender === 'Other' ? sass.active : ''}`}
                onClick={handleOtherClick}
              >
                Other
              </button>
            </div>
            {renderNextButton()}
            <div className={sass.sgContact}>
              <a href=''>Contact Us</a>
            </div>
          </div>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <p>Hello, Dias</p>
        </Modal>
      </div>
    </>
  )
}
















