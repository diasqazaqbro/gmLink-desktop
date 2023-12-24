import { Link, useNavigate, useLocation } from 'react-router-dom'
import sass from './MChat.module.sass'
import Gamepad from './assets/ci_puzzle.svg'
import Home from './assets/ci_house-01.svg'
import Profile from './assets/ci_user-square.svg'
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { MainHeader } from '../../../../widgets/mainHeader/ui/mainHeader'
import { UserHistory } from '../../../../features/user-history'
import { Filter } from '../../../../features/filter'

export function MChat() {

    const location = useLocation() 
    const navigate = useNavigate()

    const navigateToChat = () => {
        navigate('/menu/mchating')
    }
    const isChat = location.pathname === '/menu/mchat'

    return <>
    <div className={sass.background}>
        <MainHeader />
            <div className={sass.inner}>
                <div className={sass.inner__header}>
                    <h1>Chat</h1>

                </div>
                <div className={sass.stories}>
                    <ScrollingCarousel>
                        <UserHistory />
                    </ScrollingCarousel>
                </div>
                <div className={sass.inner__title}>
                    <h1>Messages</h1>
                    <Filter />
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path 
                        d="M31.4348 29.4844C31.4348 26.944 28.9994 24.7842 25.6015 23.9821M22.6848 29.4844C22.6848 26.2615 18.7677 23.6511 13.9348 23.6511C9.1019 23.6511 5.18481 26.2615 5.18481 29.4844M22.6848 19.2761C24.2319 19.2761 25.7156 18.6615 26.8096 17.5675C27.9036 16.4736 28.5181 14.9898 28.5181 13.4427C28.5181 11.8956 27.9036 10.4119 26.8096 9.31795C25.7156 8.22399 24.2319 7.60941 22.6848 7.60941M13.9348 19.2761C12.3877 19.2761 10.904 18.6615 9.81002 17.5675C8.71606 16.4736 8.10148 14.9898 8.10148 13.4427C8.10148 11.8956 8.71606 10.4119 9.81002 9.31795C10.904 8.22399 12.3877 7.60941 13.9348 7.60941C15.4819 7.60941 16.9656 8.22399 18.0596 9.31795C19.1536 10.4119 19.7681 11.8956 19.7681 13.4427C19.7681 14.9898 19.1536 16.4736 18.0596 17.5675C16.9656 18.6615 15.4819 19.2761 13.9348 19.2761Z" 
                        stroke={isChat ? '#5571FF' : 'black'} 
                        stroke-width="3" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                        />
                    </svg>
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
