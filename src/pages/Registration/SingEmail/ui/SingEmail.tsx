import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import { useState, ChangeEvent, FormEvent } from 'react'
import sass from './SingEmail.module.sass'
import Arrow from './assets/arrow_back_ios.svg'
import Help from './assets/help.svg'
import Main from './assets/enter__email-main.svg'
import WhiteBlock from './assets/white.svg'
import { SName } from '../../../Survey/SName'

export function SingEmail() {

  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const navigateToSname = () => {
    navigate('/survey/name')
  }
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const isEmailValid = () => {
    return email.includes('@');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmailValid()) {
      navigateToSname();
    }
  };  

  return <>
  <div className={sass.background}>
    <div className={sass.container}>
      <div className={sass.whiteBlock}>
        <img src={WhiteBlock} alt="" />
      </div>
      <div className={sass.seBadges}>
        <Link to='/main' className={sass.arrow}><img src={Arrow} alt="arrow" /></Link>
        <a href="" className={sass.help}><img src={Help} alt="" /></a>
      </div>
      <div className={sass.seInner}>
        <h1 className={sass.seTitle}>Please enter your Email</h1>
        <div className={sass.seDraw}>
          <img src={Main} alt="" />
        </div>
        <form action="" className={sass.seAuth} onSubmit={handleSubmit} >
        <div className={sass.enterData}>
          <input   
          name="search_query"  
          aria-label="Search" 
          role="combobox" 
          aria-haspopup="false" 
          aria-autocomplete="list" 
          autoComplete="off" 
          dir="ltr" 
          type="email" 
          id="Input"  
          onChange={handleEmailChange}
          className={sass.enterEmail} 
          placeholder="Enter your email" 
          />
          <button className={sass.clearData} onClick={() => setEmail('')} >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
              <circle cx="8.99999" cy="8.49999" r="8.49999" fill="#D9D9D9"/>
              <path d="M9 9.71429L5.35714 13.3571L4.14286 12.1429L7.78571 8.5L4.14286 4.85714L5.35714 3.64286L9 7.28571L12.6429 3.64286L13.8571 4.85714L10.2143 8.5L13.8571 12.1429L12.6429 13.3571L9 9.71429Z" fill="#1C1B1F"/>
            </svg>
          </button>
        </div>
        <button onClick={navigateToSname} disabled={!isEmailValid()} className={`${sass.seBtn} ${isEmailValid() ? sass.active : ''}`}>Next</button>
        </form>
        <a href="" className={sass.seContact}>Contact Us</a>
      </div>
    </div>
    </div>
    <Routes>
      <Route path='/survey/name' element={<SName/>}/>
    </Routes>
  </>;
}
