import sass from './SName.module.sass'
import Arrow from './assets/arrow_back_ios.svg'
import Help from './assets/help.svg'
import Main from './assets/main.svg'

export function SName() {
  return <>
    <div className={sass.container}>
      <div className={sass.snBadges}>
        <a href="" className={sass.arrow}><img src={Arrow} alt="" /></a>
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
        <form action="" className={sass.snInput}>
            <div className={sass.snEt}>
              <input type="text" placeholder="Enter if other"/>
              <a href="" className={sass.snClear}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <circle cx="8.54296" cy="8.49999" r="8.49999" fill="#D9D9D9"/>
                  <path d="M8.54297 9.71429L4.90011 13.3571L3.68583 12.1429L7.32868 8.5L3.68583 4.85714L4.90011 3.64286L8.54297 7.28571L12.1858 3.64286L13.4001 4.85714L9.75725 8.5L13.4001 12.1429L12.1858 13.3571L8.54297 9.71429Z" fill="#1C1B1F"/>
                </svg>
              </a>
            </div>
            <button className={sass.nextBtn}>Next</button>
          </form>
          <div className={sass.contact}>
            <a href="">Contact Us</a>
          </div>
      </div>
    </div>
  </>;
}
