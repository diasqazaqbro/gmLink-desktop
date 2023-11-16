import sass from './SingPhone.module.sass'
import Arrow from './assets/arrow_back_ios.svg'
import Help from './assets/help.svg'
import Main from './assets/enter__email-main.svg'
import WhiteBlock from './assets/white.svg'

export function SingPhone() {
  return <>
    <div className={sass.container}>
      <div className={sass.whiteBlock}>
        <img src={WhiteBlock} alt="" />
      </div>
      <div className={sass.spBadges}>
        <a href="" className={sass.arrow}><img src={Arrow} alt="arrow" /></a>
        <a href="" className={sass.help}><img src={Help} alt="" /></a>
      </div>
      <div className={sass.spInner}>
        <h1 className={sass.spTitle}>Please enter your Email</h1>
        <div className={sass.spDraw}>
          <img src={Main} alt="" />
        </div>
        <form action="" className={sass.spAuth}>
        <div className={sass.enterData}>
          <input   name="search_query"  aria-label="Search" role="combobox" aria-haspopup="false" aria-autocomplete="list" dir="ltr" type="number" id="Input" value="" className={sass.enterEmail} placeholder="Enter your number" />
          <button className={sass.clearData}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
              <circle cx="8.99999" cy="8.49999" r="8.49999" fill="#D9D9D9"/>
              <path d="M9 9.71429L5.35714 13.3571L4.14286 12.1429L7.78571 8.5L4.14286 4.85714L5.35714 3.64286L9 7.28571L12.6429 3.64286L13.8571 4.85714L10.2143 8.5L13.8571 12.1429L12.6429 13.3571L9 9.71429Z" fill="#1C1B1F"/>
            </svg>
          </button>
        </div>
        <button className={sass.spBtn}>Next</button>
        </form>
        <a href="" className={sass.spContact}>Contact Us</a>
      </div>
    </div>
  </>;
}
