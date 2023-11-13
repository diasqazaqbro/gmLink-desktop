import './MainPage.css'
// import sass from './MainPage.module.sass'

export function MainPage() {
  return (
    <>
    <div className='black__rotate'>
      <div className='black__rotate--text'>
        <h1><img src="/src/pages/Main/ui/assets/Logo.svg" alt="" />GMLINK</h1>
        <h5>Don’t have an account ? </h5>
      </div>
    </div>
    <div className='join'>
      <button>Join</button>
    </div>
      <div className="container">
        <div className='main__page--inner'>
          <div className='mP--img'>
            <img src="/src/pages/Main/ui/assets/mP--people.svg" alt="people" />
          </div>
          <div className="mP--btns">
            <button className='mP--btn number'>Sign in Number</button>
            <button className='mP--btn email'>Sign in Email</button>
          </div>
          <ul className='mP--links'>
            <li className='mP--link'>
              <a href="">
                <img src="/src/pages/Main/ui/assets/Group 5.svg" alt="" className='discord' />
              </a>
            </li>
            <li className='mP--link'>
              <a href="">
                <img src="/src/pages/Main/ui/assets/Group 6.svg" alt="" />
              </a>
            </li>
            <li className='mP--link google__link'>
              <a href="">
                <img src="/src/pages/Main/ui/assets/Frame.svg" alt="" />
              </a>
            </li>
            <li className='mP--link'>
              <a href="">
                <img src="/src/pages/Main/ui/assets/Group 8.svg" alt="" className='dots'/>
              </a>
            </li>
          </ul>
          <div className='black__rotateInContact'></div>
          <div className="contact">
            <a href="" className='contactUs'>Contact Us</a>
          </div>
        </div>
      </div>
    </>
  )
}