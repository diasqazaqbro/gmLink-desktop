import { useState } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import sass from './SGender.module.sass'
import Arrow from './assets/arrow_back_ios.svg'
import Help from './assets/help.svg'
import { SInterests } from '../../SInterests'
import { Modal } from '../../../Modal'

export function SGender() {
  const [modalActive, setModalActive] = useState(false)
  const navigate = useNavigate()

  const [selectedGender, setSelectedGender] = useState('')
  const [isOtherSelected, setIsOtherSelected] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [otherInput, setOtherInput] = useState('')

  const navigateToSInterests = () => {
    navigate('/survey/interests')
  }

  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender)

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

  const handleClearClick = () => {
    setOtherInput('')
  }

  const renderNextButton = () => {
    if (isOtherSelected) {
      return (
        <form
          action=''
          className={`${sass.sgInput} ${formVisible ? sass.formVisible : ''}`}
        >
          <div className={sass.gcEt}>
            <input
              className={sass.gcEnter}
              type='text'
              placeholder='Enter if other'
              value={otherInput}
              onChange={(e) => setOtherInput(e.target.value)}
            />
            {otherInput && (
              <a href='' className={sass.gcClear} onClick={handleClearClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <circle cx="8.54296" cy="8.49999" r="8.49999" fill="#D9D9D9" />
                  <path d="M8.54297 9.71429L4.90011 13.3571L3.68583 12.1429L7.32868 8.5L3.68583 4.85714L4.90011 3.64286L8.54297 7.28571L12.1858 3.64286L13.4001 4.85714L9.75725 8.5L13.4001 12.1429L12.1858 13.3571L8.54297 9.71429Z" fill="#1C1B1F" />
                </svg>
              </a>
            )}
          </div>
          <button onClick={navigateToSInterests} className={sass.nextBtn}>
            Next
          </button>
        </form>
      );
    } else if (selectedGender === 'Male' || selectedGender === 'Female' || selectedGender === 'Other') {
      return (
        <button onClick={navigateToSInterests} className={sass.nextBtn2}>
          Next
        </button>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className={sass.background}>
        <div className={sass.container}>
          <div className={sass.sgBadges}>
            <Link to='/survey/name' className={sass.arrow}>
              <img src={Arrow} alt="arrow" />
            </Link>
            <button onClick={() => setModalActive(true)} className={sass.help}>
              <img src={Help} alt="help" />
            </button>
          </div>
          <div className={sass.sgInner}>
            <div className={sass.sgText}>
              <h1>Your gender...</h1>
              <p>This information is needed to correctly determine the pair for you.</p>
            </div>
            <div className={sass.sgChoice}>
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
            <div className={sass.sgChoice2}>
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
      <Routes>
        <Route path='/survey/interests' element={<SInterests />} />
      </Routes>
    </>
  );
}
















