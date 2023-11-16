import sass from './MainPage.module.sass';

export function MainPage() {
  
  return (
    <>
    <div className={sass.br}>
      <div className={sass.brText}>
        <h1>
          <img src="/src/pages/Main/ui/assets/Logo.svg" alt="GMLINK Logo" />
          GMLINK
        </h1>
        <h5>Don’t have an account ? </h5>
      </div>
    </div>
      <div className={sass.join}>
        <button>Join</button>
      </div>
      <div className={sass.container}>
        <div className={sass.mpInner}>
          <div className={sass.mpImg}>
            <img src="/src/pages/Main/ui/assets/mP--people.svg" alt="People" />
          </div>
          <div className={sass.mpBtns}>
            <button className={sass.mpBtn}>Sign in Number</button>
            <button className={sass.mpBtn}>Sign in Email</button>
          </div>
          <ul className={sass.mpLinks}>
            <li className={sass.mpLink}>
              <a href="">
                <img src="/src/pages/Main/ui/assets/Group 5.svg" alt="Discord" className={sass.discord} />
              </a>
            </li>
            <li className={sass.mpLink}>
              <a href="">
                <img src="/src/pages/Main/ui/assets/Group 6.svg" alt="Group 6" />
              </a>
            </li>
            <li className={sass.gLink}>
              <a href="">
                <img src="/src/pages/Main/ui/assets/Frame.svg" alt="Frame" />
              </a>
            </li>
            <li className={sass.mpLink}>
              <a href="">
                <img src="/src/pages/Main/ui/assets/Group 8.svg" alt="Dots" className={sass.dots} />
              </a>
            </li>
          </ul>
          <div className={sass.brInContact}></div>
          <div className={sass.contact}>
            <a href="" className={sass.contactUs}>Contact Us</a>
          </div>
        </div>
      </div>
      </>
  );
}


