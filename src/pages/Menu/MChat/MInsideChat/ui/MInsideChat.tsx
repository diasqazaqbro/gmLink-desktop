import sass from './MInsideChat.module.sass'
import Back from './assets/arrow_back_ios.svg'
import get from './assets/get.svg'
import sent from './assets/sent.svg'

export function MInsideChat() { 

    return <>
        <div className={sass.background}>
            <div className={sass.inner}>
                <div className={sass.header}>
                    <a href="" className={sass.back}>
                        <img src={Back} alt="" />
                    </a>
                    <a className={sass.avatar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <circle cx="23.3564" cy="23.4276" r="22.5" fill="#5571FF"/>
                        </svg>
                    </a>
                    <div className={sass.header_text}>
                        <a>Artem</a>
                        <p>Was there 30 minutes ago</p>
                    </div>
                    <a href="" className={sass.dots}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="9" viewBox="0 0 35 9" fill="none">
                            <circle cx="4.80981" cy="4.92761" r="4" fill="#282727"/>
                            <circle cx="17.8098" cy="4.92761" r="4" fill="#282727"/>
                            <circle cx="30.8098" cy="4.92761" r="4" fill="#282727"/>
                        </svg>
                    </a>
                </div>
                <div className={sass.main}>
                    <div className={sass.data}>
                        <h1>Yesterday</h1>
                    </div>
                    <div className={sass.first_massage}>
                        <div className={sass.dataset}>
                            <h1><img src={get} alt="" /> 14:13</h1>
                        </div>
                        <div className={sass.massage}></div>
                    </div>

                    <div className={sass.second_massage}>
                        <div className={sass.dataset}>
                            <h1>14:13 <img src={sent} alt="" /></h1>
                        </div>
                        <div className={sass.massage}></div>
                    </div>

                    <div className={sass.third_massage}>
                        <div className={sass.dataset}>
                            <h1><img src={sent} alt="" /> 14:13</h1>
                        </div>
                        <div className={sass.massage}></div>
                    </div>
                </div>
            </div>
            <div className={sass.footer}>
                <div className={sass.textbar}>
                    <div className={sass.text_sending}>
                        <input type="text" autoComplete='off' />
                        <button >
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="31" viewBox="0 0 35 31" fill="none">
                                <path d="M14.8494 17.2504L21.7329 11.1929M28.7727 7.49794L22.963 24.1154C22.4417 25.6054 22.1817 26.3504 21.7315 26.5967C21.5398 26.7022 21.3222 26.7659 21.0968 26.7824C20.8715 26.7989 20.6449 26.7678 20.436 26.6917C19.946 26.5129 19.5496 25.8167 18.757 24.4217L15.0781 17.9442C15.002 17.7945 14.9102 17.6514 14.8039 17.5167C14.73 17.432 14.6441 17.356 14.5482 17.2904C14.4001 17.2002 14.2427 17.1224 14.0781 17.0579L6.70163 13.8104C5.11783 13.1129 4.32521 12.7642 4.12209 12.3342C4.03544 12.1502 4.00003 11.9506 4.01881 11.752C4.03759 11.5535 4.11001 11.3618 4.23004 11.1929C4.50987 10.7979 5.35646 10.5679 7.04964 10.1092L25.9346 4.99669C27.2656 4.63544 27.9303 4.45544 28.3806 4.60169C28.574 4.66419 28.7497 4.76298 28.8954 4.89119C29.0411 5.01941 29.1533 5.17398 29.2244 5.34419C29.3891 5.73919 29.1846 6.32419 28.7755 7.49419V7.49669L28.7727 7.49794Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}