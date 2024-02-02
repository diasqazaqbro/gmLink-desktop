import { FormEvent, memo, useCallback, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link, useNavigate } from 'react-router-dom'
import sass from './SGender.module.sass'
import { Modal } from '../../../../shared/ui/Modal'
import { Badges } from '../../../../shared/ui/Badges/Badges'
import { Button } from '../../../../shared/ui/Button/Button'
import { Enter } from '../../../../shared/ui/Input/Enter/Enter'
import { Delete } from '../../../../shared/ui/Input/Delete/Delete'

export const SGender = memo(() => {
  const [modalActive, setModalActive] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    show: false,
    selectedGender: '',
    isOtherSelected: false,
    formVisible: false,
    otherInput: ''
  })

  const navigateTo = () => {
    navigate('/registration/interests')
  }

  const toogleModal = (e: FormEvent) => {
    e.preventDefault()
    setModalActive(!modalActive)
  }

  const handleGenderClick = (gender: string) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedGender: gender,
      show: !prevData.show,
      isOtherSelected: false,
      formVisible: false
    }))
  }

  const handleOtherClick = () => {
    setFormData((prevData) => ({
      ...prevData,
      isOtherSelected: true,
      formVisible: true,
      selectedGender: 'Other'
    }))
  }

  const handleClearClick = useCallback((e: FormEvent) => {
    e.preventDefault()
    setFormData((prevData) => ({
      ...prevData,
      otherInput: ''
    }))
  }, [])

  const renderNextButton = useCallback(() => {
    if (formData.isOtherSelected) {
      return (
        <form
          action=''
          className={`${sass.input} ${formData.formVisible ? sass.formVisible : ''}`}
        >
          <div className={sass.et}>
            <Enter 
              placeholder='Enter if other'
              value={formData.otherInput}
              className={sass.enter}
              onChange={(e) => setFormData((prevData) => ({
                ...prevData,
                otherInput: e.target.value
              }))} type={''} />
            {formData.otherInput && (
              <Delete
                onClear={handleClearClick}
              />
            )}
          </div>
          <div className={sass.btn}>
            <Button 
              onClick={navigateTo}
              label='Next'
              className={`${sass.next}`} />
          </div>
        </form>
      )
    } else if (formData.selectedGender === 'Male' || formData.selectedGender === 'Female' || formData.selectedGender === 'Other') {
      return (
        <form 
          className={sass.input}
        >
          <div className={sass.btn}>
            <CSSTransition in={formData.show} timeout={10000000} classNames='alert' unmountOnExit>
              <Button 
                onClick={navigateTo}
                label='Next'
                className={`${sass.next}`}
              />
            </CSSTransition>
          </div>
        </form>
      )
    } else {
      return null
    }
  }, [formData, handleClearClick]);

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
                className={`${sass.male} ${formData.selectedGender === 'Male' ? sass.active : ''}`}
                onClick={() => handleGenderClick('Male')}
              >
                Male
              </button>
              <button
                className={`${sass.female} ${formData.selectedGender === 'Female' ? sass.active : ''}`}
                onClick={() => handleGenderClick('Female')}
              >
                Female
              </button>
            </div>
            <div className={sass.choice2}>
              <span>or</span>
              <button
                className={`${sass.other} ${formData.selectedGender === 'Other' ? sass.active : ''}`}
                onClick={handleOtherClick}
              >
                Other
              </button>
            </div>
            {renderNextButton()}
            <div className={sass.sgContact}>
              <Link to='/report'>Contact Us</Link>
            </div>
          </div>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <p>Hello, Dias</p>
        </Modal>
      </div>
    </>
  )
})
