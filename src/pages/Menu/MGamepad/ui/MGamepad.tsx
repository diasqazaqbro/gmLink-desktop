import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { MHome } from '../../MHome'
import Chat from './assets/ci_users.svg'
import Gamepad from './assets/ci_puzzle.svg'
import Home from './assets/ci_house-01.svg'
import Profile from './assets/ci_user-square.svg'
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
                    <img src={Home} alt="" />
                </Link>
            </div>
            <div className={sass.cardNav}>
                <Link to='/Menu/MGamepad'>
                    <img src={Gamepad} alt="" />
                </Link>
            </div>
            <div className={sass.cardNav}>
                <Link to='/menu/mchat'>
                    <img src={Chat} alt="" />
                </Link>
            </div>
            <div className={sass.cardNav}>
                <Link to='/menu/mprofile'>
                    <img src={Profile} alt="" />
                </Link>
            </div>
        </div>
        </div>
    </div>
    <Routes>
        <Route path='menu/mhome' element={<MHome/>}/>
    </Routes>
    </>
}
