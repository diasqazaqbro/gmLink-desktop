import { useState, ChangeEvent, FormEvent } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import sass from './SName.module.sass'
import Arrow from './assets/arrow_back_ios.svg'
import Help from './assets/help.svg'
import Main from './assets/main.svg'
import { SGengder } from '../../SGender'

export function SName() {

  const [name, setName] = useState('')

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const isNameValid = () => {
    return name.trim() !== ''
  }

  const navigate = useNavigate()

  const navigateToSg = () => {
    navigate('/survey/gender')
  }

  return <>
  <div className={sass.background}>
    <div className={sass.container}>
      <div className={sass.snBadges}>
        <Link to='/registration/sing-email'  className={sass.arrow}><img src={Arrow} alt="" /></Link>
        <a href="" className={sass.help}><img src={Help} alt="" /></a>
      </div>
      <div className={sass.snInner}>
        <div className={sass.snText}>
          <h1>Let's get acquainted !
          What is your name ?
          </h1>
          <p>Other users will see you under this name. You can change it in the future</p>
        </div>
        <div className={sass.snMain}>
          <img src={Main} alt="" />
        </div>
        <form 
          action="" 
          className={sass.snInput}
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (isNameValid()) {
              navigateToSg();
            }
          }}
          >
            <div className={sass.snEt}>
              <input 
                type="text" 
                autoComplete='off'
                placeholder="Enter if other"
                onChange={handleNameChange}
                />
              <a href="" className={sass.snClear}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <circle cx="8.54296" cy="8.49999" r="8.49999" fill="#D9D9D9"/>
                  <path d="M8.54297 9.71429L4.90011 13.3571L3.68583 12.1429L7.32868 8.5L3.68583 4.85714L4.90011 3.64286L8.54297 7.28571L12.1858 3.64286L13.4001 4.85714L9.75725 8.5L13.4001 12.1429L12.1858 13.3571L8.54297 9.71429Z" fill="#1C1B1F"/>
                </svg>
              </a>
            </div>
            <button  className={`${sass.nextBtn} ${isNameValid() ? sass.active : ''}`}>Next</button>
          </form>
          <div className={sass.contact}>
            <a href="">Contact Us</a>
          </div>
      </div>
    </div>
    </div>
    <Routes>
      <Route path='/survey/gender' element={<SGengder/>}/>
    </Routes>
  </>;
}
