import sass from './SGender.module.sass'

export function SGengder() {
  return <>
    <div className={sass.container}>
      <div className={sass.sgBadges}>
        <a href="" className={sass.arrow}><img src="./assets/arrow_back_ios.svg" alt="arrow" /></a>
        <a href="" className={sass.help} ><img src="./assets/help.svg" alt="help" /></a>
      </div>
      <div className={sass.sgInner}>
        <div className={sass.sgText}>
          <h1>You gender...</h1>
          <p>This information is needed to correctly determine the pair for you.</p>
        </div>
        <div className={sass.sgChoice}>
          <button className={sass.male}>Male</button>
          <button className={sass.female}>Female</button>
        </div>
          <div className={sass.sgChoice2}>
            <span>or</span>
            <button className={sass.other}>Other</button>
          </div>
          <form action="" className={sass.sgInput}>
            <div className={sass.gcEt}>
              <input className={sass.gcEnter} type="text" placeholder="Enter if other"/>
              <a href="" className={sass.gcClear}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                  <circle cx="8.54296" cy="8.49999" r="8.49999" fill="#D9D9D9"/>
                  <path d="M8.54297 9.71429L4.90011 13.3571L3.68583 12.1429L7.32868 8.5L3.68583 4.85714L4.90011 3.64286L8.54297 7.28571L12.1858 3.64286L13.4001 4.85714L9.75725 8.5L13.4001 12.1429L12.1858 13.3571L8.54297 9.71429Z" fill="#1C1B1F"/>
                </svg>
              </a>
            </div>
            <button className={sass.nextBtn}>Next</button>
          </form>
          <div className={sass.sgContact}>
            <a href="">Contact Us</a>
          </div>
      </div>
    </div>
  </>;
}
