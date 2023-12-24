import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Dota from '../../../../../public/images/dota2_social 2.png'
import Chat from './assets/ci_users.svg'
import Home from './assets/ci_house-01.svg'
import Profile from './assets/ci_user-square.svg'
import sass from './MGamepad.module.sass'
import { SearchBar } from '../../../../features/search/ui/Search'
import help from '../../../../../public/images/help.svg'
import { GameCard } from '../../../../shared/ui/Game-card/GameCard'
import { Filter } from '../../../../features/filter'


export function MGamepad() {
    const [gameList, setGameList] = useState([])
    const location = useLocation()

    const isGamepad = location.pathname === '/Menu/MGamepad'

    return <>
        <div className={sass.background}>
            <div className={sass.header} >
                <SearchBar />
                <a href=""><img src={help} alt="" /></a>
            </div>
            <div className={sass.inner}>
                <div className={sass.inner__header}>
                    <h1>Your game</h1>
                    <Filter />
                </div>
                <div className={sass.cards}>
                    <GameCard id={''} image={Dota} name='Dota 2' routePath={''} />
                    <GameCard id={''} image={Dota} name='Dota 2' routePath={''} />
                    <GameCard id={''} image={Dota} name='Dota 2' routePath={''} />
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
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                        <path 
                        d="M25.8098 9.06775H23.1211C22.4973 9.06775 22.0598 8.44025 22.0598 7.81775C22.0598 7.32529 21.9628 6.83766 21.7744 6.38269C21.5859 5.92772 21.3097 5.51432 20.9615 5.1661C20.6132 4.81788 20.1998 4.54166 19.7449 4.3532C19.2899 4.16475 18.8023 4.06775 18.3098 4.06775C17.8174 4.06775 17.3297 4.16475 16.8748 4.3532C16.4198 4.54166 16.0064 4.81788 15.6582 5.1661C15.3099 5.51432 15.0337 5.92772 14.8453 6.38269C14.6568 6.83766 14.5598 7.32529 14.5598 7.81775C14.5598 8.44025 14.1211 9.06775 13.4986 9.06775H10.8098C10.4783 9.06775 10.1604 9.19945 9.92593 9.43387C9.69151 9.66829 9.55981 9.98623 9.55981 10.3177V13.0065C9.55981 13.6302 8.93231 14.0677 8.30981 14.0677C7.81736 14.0677 7.32972 14.1647 6.87475 14.3532C6.41978 14.5417 6.00638 14.8179 5.65816 15.1661C5.30994 15.5143 5.03372 15.9277 4.84527 16.3827C4.65681 16.8377 4.55981 17.3253 4.55981 17.8177C4.55981 18.3102 4.65681 18.7978 4.84527 19.2528C5.03372 19.7078 5.30994 20.1212 5.65816 20.4694C6.00638 20.8176 6.41978 21.0938 6.87475 21.2823C7.32972 21.4708 7.81736 21.5677 8.30981 21.5677C8.93231 21.5677 9.55981 22.0065 9.55981 22.629V25.3177C9.55981 25.6493 9.69151 25.9672 9.92593 26.2016C10.1604 26.4361 10.4783 26.5677 10.8098 26.5677H25.8098C26.1413 26.5677 26.4593 26.4361 26.6937 26.2016C26.9281 25.9672 27.0598 25.6493 27.0598 25.3177V22.629C27.0598 22.0065 26.4311 21.5677 25.8098 21.5677C25.3174 21.5677 24.8297 21.4708 24.3748 21.2823C23.9198 21.0938 23.5064 20.8176 23.1582 20.4694C22.8099 20.1212 22.5337 19.7078 22.3453 19.2528C22.1568 18.7978 22.0598 18.3102 22.0598 17.8177C22.0598 17.3253 22.1568 16.8377 22.3453 16.3827C22.5337 15.9277 22.8099 15.5143 23.1582 15.1661C23.5064 14.8179 23.9198 14.5417 24.3748 14.3532C24.8297 14.1647 25.3174 14.0677 25.8098 14.0677C26.4311 14.0677 27.0598 13.629 27.0598 13.0065V10.3177C27.0598 9.98623 26.9281 9.66829 26.6937 9.43387C26.4593 9.19945 26.1413 9.06775 25.8098 9.06775Z" 
                        stroke={isGamepad ? '#5571FF' : 'black'} 
                        stroke-width="3" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                        />
                    </svg>
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
    </>
}
