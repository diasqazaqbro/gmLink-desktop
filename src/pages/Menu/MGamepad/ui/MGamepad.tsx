import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Gamepad from './assets/Gamepad.png'
import { MHome } from '../../MHome'
import Chat from './assets/Chat.png'
import sass from './MGamepad.module.sass'

export function MGamepad() {

    const [isSearchActive, setIsSearchActive] = useState(false)

    const handleIconClick = () => {
        setIsSearchActive(!isSearchActive)
    }

    const [searchValue, setSearchValue] = useState('')

    const handleClearClick = () => {
        setSearchValue('')
    }

    return <>
    <div className={sass.background}>
        <div className={sass.container}>
            <div className={sass.mgInner}>
                <div className={`${sass.search} ${isSearchActive ? sass.active : ''}`}>
                    <div onClick={handleIconClick} className={sass.icon}></div>
                    <div className={sass.input}>
                        <input 
                        type="text" 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                    <span className={sass.clear} onClick={handleClearClick}></span>
                </div>
                <div className={sass.cards_header}>
                    <div className={sass.card1}></div>
                    <div className={sass.card2}></div>
                    <div className={sass.card3}></div>
                </div>
                <div className={sass.cards_main}>
                    <div className={sass.card1}></div>
                    <div className={sass.card2}></div>
                    <div className={sass.card3}></div>
                </div>
                <div className={sass.cards_main2}>
                    <h1>WAY ETO CHO TO</h1>
                    <div className={sass.card}></div>
                </div>
                <div className={sass.cards_foot}>
                    <h1>TOP PROFILE</h1>
                    <div className={sass.cards_footer}>
                        <div className={sass.card1}></div>
                        <div className={sass.card2}></div>
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
    </div>
    <Routes>
        <Route path='menu/mhome' element={<MHome/>}/>
    </Routes>
    </>
}
