import {Link} from 'react-router-dom'
import Chat from './assets/Chat.png'
import Gamepad from './assets/Gamepad.png'
import sass from './MHome.module.sass'

export function MHome() {
    return <>
        <div className={sass.background}>
                <div className={sass.inner}>
                    <div className={sass.connect}>
                        <h1>Connection</h1>
                        <div className={sass.dots}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                    <circle cx="12.5" cy="13.125" r="12" stroke="white"/>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                    <circle cx="12.5" cy="13.125" r="12" stroke="white"/>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                    <circle cx="12.5" cy="13.125" r="12" stroke="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={sass.swiperBox} >
                        <div className={sass.swiperHeader}>
                            <h1>Artem / 18</h1>
                            <a className={sass.swiperDots}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="11" viewBox="0 0 34 11" fill="none">
                                    <circle cx="5" cy="5.76343" r="5" fill="black"/>
                                    <circle cx="29" cy="5.76343" r="5" fill="black"/>
                                    <circle cx="17" cy="5.76343" r="5" fill="black"/>
                                </svg>
                            </a>
                        </div>
                        <div className={sass.cause}>
                            <div className={sass.causeBgc}>
                                <h1>Find in love</h1>
                            </div>
                        </div>
                        <div className={sass.swiperMain}>

                        </div>
                        <div className={sass.swiperFooter}>
                            <div className={sass.swiperCircle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="34" viewBox="0 0 36 34" fill="none">
                                    <path d="M8.83333 0.270508L27.1667 0.270508V21.9372L15.5 33.6038L13.4167 31.5205C13.2222 31.3261 13.0625 31.0622 12.9375 30.7288C12.8125 30.3955 12.75 30.0761 12.75 29.7705V29.1872L14.5833 21.9372H3.83333C2.94444 21.9372 2.16667 21.6038 1.5 20.9372C0.833333 20.2705 0.5 19.4927 0.5 18.6038V15.2705C0.5 15.0761 0.527778 14.8677 0.583333 14.6455C0.638889 14.4233 0.694444 14.215 0.75 14.0205L5.75 2.27051C6 1.71495 6.41667 1.24273 7 0.853841C7.58333 0.464952 8.19444 0.270508 8.83333 0.270508ZM23.8333 3.60384L8.83333 3.60384L3.83333 15.2705L3.83333 18.6038H18.8333L16.5833 27.7705L23.8333 20.5205V3.60384ZM27.1667 21.9372V18.6038H32.1667V3.60384H27.1667V0.270508L35.5 0.270508V21.9372H27.1667Z" fill="black"/>
                                </svg>
                            </div>
                            <div className={sass.swiperCircle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="37" viewBox="0 0 31 37" fill="none">
                                    <path d="M4.25 21.2524C4.25 22.8774 4.57812 24.4164 5.23438 25.8696C5.89062 27.3227 6.82812 28.5961 8.04688 29.6899C8.01562 29.5336 8 29.393 8 29.268V28.8461C8 27.8461 8.1875 26.9086 8.5625 26.0336C8.9375 25.1586 9.48438 24.3618 10.2031 23.643L15.5 18.4399L20.7969 23.643C21.5156 24.3618 22.0625 25.1586 22.4375 26.0336C22.8125 26.9086 23 27.8461 23 28.8461V29.268C23 29.393 22.9844 29.5336 22.9531 29.6899C24.1719 28.5961 25.1094 27.3227 25.7656 25.8696C26.4219 24.4164 26.75 22.8774 26.75 21.2524C26.75 19.6899 26.4609 18.2133 25.8828 16.8227C25.3047 15.4321 24.4688 14.1899 23.375 13.0961C22.75 13.5024 22.0938 13.8071 21.4063 14.0102C20.7188 14.2133 20.0156 14.3149 19.2969 14.3149C17.3594 14.3149 15.6797 13.6743 14.2578 12.393C12.8359 11.1118 12.0156 9.53363 11.7969 7.65863C10.5781 8.68988 9.5 9.76019 8.5625 10.8696C7.625 11.9789 6.83594 13.1039 6.19531 14.2446C5.55469 15.3852 5.07031 16.5493 4.74219 17.7368C4.41406 18.9243 4.25 20.0961 4.25 21.2524ZM15.5 23.6899L12.8281 26.3149C12.4844 26.6586 12.2188 27.0493 12.0312 27.4868C11.8438 27.9243 11.75 28.3774 11.75 28.8461C11.75 29.8461 12.1172 30.7055 12.8516 31.4243C13.5859 32.143 14.4688 32.5024 15.5 32.5024C16.5312 32.5024 17.4141 32.143 18.1484 31.4243C18.8828 30.7055 19.25 29.8461 19.25 28.8461C19.25 28.3461 19.1562 27.8852 18.9688 27.4633C18.7812 27.0414 18.5156 26.6586 18.1719 26.3149L15.5 23.6899ZM15.5 0.62738V6.81488C15.5 7.87738 15.8672 8.76801 16.6016 9.48676C17.3359 10.2055 18.2344 10.5649 19.2969 10.5649C19.8594 10.5649 20.3828 10.4477 20.8672 10.2133C21.3516 9.97894 21.7812 9.62738 22.1562 9.15863L23 8.12738C25.3125 9.43988 27.1406 11.268 28.4844 13.6118C29.8281 15.9555 30.5 18.5024 30.5 21.2524C30.5 25.4399 29.0469 28.9868 26.1406 31.893C23.2344 34.7993 19.6875 36.2524 15.5 36.2524C11.3125 36.2524 7.76563 34.7993 4.85938 31.893C1.95313 28.9868 0.5 25.4399 0.5 21.2524C0.5 17.2211 1.85156 13.393 4.55469 9.76801C7.25781 6.14301 10.9062 3.09613 15.5 0.62738Z" fill="black"/>
                                </svg>
                            </div>
                            <div className={sass.swiperCircle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" viewBox="0 0 36 33" fill="none">
                                    <path d="M18 32.383L15.4625 30.108C12.5167 27.4538 10.0813 25.1643 8.15625 23.2393C6.23125 21.3143 4.7 19.5861 3.5625 18.0549C2.425 16.5236 1.63021 15.1163 1.17813 13.833C0.726042 12.5497 0.5 11.2372 0.5 9.89551C0.5 7.15384 1.41875 4.86426 3.25625 3.02676C5.09375 1.18926 7.38333 0.270508 10.125 0.270508C11.6417 0.270508 13.0854 0.591341 14.4563 1.23301C15.8271 1.87467 17.0083 2.77884 18 3.94551C18.9917 2.77884 20.1729 1.87467 21.5438 1.23301C22.9146 0.591341 24.3583 0.270508 25.875 0.270508C28.6167 0.270508 30.9063 1.18926 32.7438 3.02676C34.5813 4.86426 35.5 7.15384 35.5 9.89551C35.5 11.2372 35.274 12.5497 34.8219 13.833C34.3698 15.1163 33.575 16.5236 32.4375 18.0549C31.3 19.5861 29.7687 21.3143 27.8438 23.2393C25.9188 25.1643 23.4833 27.4538 20.5375 30.108L18 32.383ZM18 27.658C20.8 25.1497 23.1042 22.9986 24.9125 21.2049C26.7208 19.4111 28.15 17.8507 29.2 16.5236C30.25 15.1965 30.9792 14.0153 31.3875 12.9799C31.7958 11.9445 32 10.9163 32 9.89551C32 8.14551 31.4167 6.68717 30.25 5.52051C29.0833 4.35384 27.625 3.77051 25.875 3.77051C24.5042 3.77051 23.2354 4.15697 22.0688 4.92988C20.9021 5.7028 20.1 6.68717 19.6625 7.88301H16.3375C15.9 6.68717 15.0979 5.7028 13.9313 4.92988C12.7646 4.15697 11.4958 3.77051 10.125 3.77051C8.375 3.77051 6.91667 4.35384 5.75 5.52051C4.58333 6.68717 4 8.14551 4 9.89551C4 10.9163 4.20417 11.9445 4.6125 12.9799C5.02083 14.0153 5.75 15.1965 6.8 16.5236C7.85 17.8507 9.27917 19.4111 11.0875 21.2049C12.8958 22.9986 15.2 25.1497 18 27.658Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            <div className={sass.footer}>
            <div className={sass.cardNav}>
                <Link to='/menu/mhome'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="26" viewBox="0 0 31 26" fill="none">
                        <mask id="mask0_0_1015" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="26">
                        <rect x="0.193359" y="0.818604" width="30" height="24.5916" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_0_1015)">
                        <path d="M15.1896 1.01001L30.0565 12.1602L28.4346 14.3226L26.0019 12.498V25.3376H4.37735V12.498L1.94459 14.3226L0.322754 12.1602L15.1896 1.01001ZM23.2988 22.6345V10.4707L15.1896 4.38884L7.08042 10.4707V22.6345H23.2988Z" fill="black"/>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className={sass.cardNav}>
                <Link to='/Menu/MGamepad'>
                    <img src={Gamepad} alt="" />
                </Link>
            </div>
            <div className={sass.cardNav}>
                <a href="">
                    <img src={Chat} alt="" />
                </a>
            </div>
            <div className={sass.cardNav}>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                        <mask id="mask0_0_1018" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="31">
                        <rect x="0.193359" y="0.16687" width="30" height="30" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_0_1018)">
                        <path d="M7.50586 21.5419C8.56836 20.7294 9.75586 20.0887 11.0684 19.62C12.3809 19.1512 13.7559 18.9169 15.1934 18.9169C16.6309 18.9169 18.0059 19.1512 19.3184 19.62C20.6309 20.0887 21.8184 20.7294 22.8809 21.5419C23.61 20.6877 24.1777 19.719 24.584 18.6356C24.9902 17.5523 25.1934 16.396 25.1934 15.1669C25.1934 12.396 24.2194 10.0367 22.2715 8.08875C20.3236 6.14083 17.9642 5.16687 15.1934 5.16687C12.4225 5.16687 10.0632 6.14083 8.11523 8.08875C6.16732 10.0367 5.19336 12.396 5.19336 15.1669C5.19336 16.396 5.39648 17.5523 5.80273 18.6356C6.20898 19.719 6.77669 20.6877 7.50586 21.5419ZM15.1934 16.4169C13.9642 16.4169 12.9277 15.995 12.084 15.1512C11.2402 14.3075 10.8184 13.271 10.8184 12.0419C10.8184 10.8127 11.2402 9.77625 12.084 8.9325C12.9277 8.08875 13.9642 7.66687 15.1934 7.66687C16.4225 7.66687 17.459 8.08875 18.3027 8.9325C19.1465 9.77625 19.5684 10.8127 19.5684 12.0419C19.5684 13.271 19.1465 14.3075 18.3027 15.1512C17.459 15.995 16.4225 16.4169 15.1934 16.4169ZM15.1934 27.6669C13.4642 27.6669 11.8392 27.3387 10.3184 26.6825C8.79753 26.0262 7.47461 25.1356 6.34961 24.0106C5.22461 22.8856 4.33398 21.5627 3.67773 20.0419C3.02148 18.521 2.69336 16.896 2.69336 15.1669C2.69336 13.4377 3.02148 11.8127 3.67773 10.2919C4.33398 8.77104 5.22461 7.44812 6.34961 6.32312C7.47461 5.19812 8.79753 4.3075 10.3184 3.65125C11.8392 2.995 13.4642 2.66687 15.1934 2.66687C16.9225 2.66687 18.5475 2.995 20.0684 3.65125C21.5892 4.3075 22.9121 5.19812 24.0371 6.32312C25.1621 7.44812 26.0527 8.77104 26.709 10.2919C27.3652 11.8127 27.6934 13.4377 27.6934 15.1669C27.6934 16.896 27.3652 18.521 26.709 20.0419C26.0527 21.5627 25.1621 22.8856 24.0371 24.0106C22.9121 25.1356 21.5892 26.0262 20.0684 26.6825C18.5475 27.3387 16.9225 27.6669 15.1934 27.6669ZM15.1934 25.1669C16.2975 25.1669 17.3392 25.0054 18.3184 24.6825C19.2975 24.3596 20.1934 23.896 21.0059 23.2919C20.1934 22.6877 19.2975 22.2242 18.3184 21.9012C17.3392 21.5783 16.2975 21.4169 15.1934 21.4169C14.0892 21.4169 13.0475 21.5783 12.0684 21.9012C11.0892 22.2242 10.1934 22.6877 9.38086 23.2919C10.1934 23.896 11.0892 24.3596 12.0684 24.6825C13.0475 25.0054 14.0892 25.1669 15.1934 25.1669ZM15.1934 13.9169C15.735 13.9169 16.1829 13.7398 16.5371 13.3856C16.8913 13.0315 17.0684 12.5835 17.0684 12.0419C17.0684 11.5002 16.8913 11.0523 16.5371 10.6981C16.1829 10.344 15.735 10.1669 15.1934 10.1669C14.6517 10.1669 14.2038 10.344 13.8496 10.6981C13.4954 11.0523 13.3184 11.5002 13.3184 12.0419C13.3184 12.5835 13.4954 13.0315 13.8496 13.3856C14.2038 13.7398 14.6517 13.9169 15.1934 13.9169Z" fill="#1C1B1F"/>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
        </div>
    </>
}
