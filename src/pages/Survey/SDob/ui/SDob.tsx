import sass from './SDob.module.sass'
import Arrow from './assets/arrow_back_ios.svg'
import Help from './assets/help.svg'

export function SDob() {
  return <>
    <div className={sass.background}>
      <div className={sass.container}>
        <div className={sass.sdBadges}>
          <a href="" className={sass.arrow}><img src={Arrow} alt="" /></a>
          <a href="" className={sass.help}><img src={Help} alt="" /></a>
        </div>
        <div className={sass.sdInner}>
          <div className={sass.sdText}>
            <h1>Nice to meet you, Artem.
            When is your birthday ?</h1>
            <p>Others will only see your age in your profile.</p>
          </div>
          <div className={sass.sbData}>
            <span>Day</span>
            <span>Month</span>
            <span>Year</span>
          </div>
          <div className={sass.sbDob}>
            <div className={sass.line}></div>
            <div className={sass.line2}></div>
          </div>
          <div className={sass.sbBtn}>
            <h3>This is data is protected.</h3>
            <button>Next</button>
            <a href="">Skip</a>
          </div>
          <div className={sass.contact}>
            <a href="">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </>;
}
