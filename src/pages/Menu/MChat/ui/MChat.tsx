import { Link } from 'react-router-dom'
import sass from './MChat.module.sass'
import Logo from './assets/Logo.svg'
import circle1 from './assets/circle1.svg'
import Chat from './assets/chat-round-svgrepo-com.svg'
import Gamepad from './assets/gamepad-svgrepo-com.svg'
import Home from './assets/home-svgrepo-com.svg'
import Profile from './assets/profile-circle-svgrepo-com.svg'
import Heart from './assets/heart.svg'

export function MChat() {
    return <>
    <div className={sass.background}>
            <div className={sass.mcInner}>
                <div className={sass.mcBox}>
                    <div className={sass.header_top}>
                        <h1>Chat</h1>
                        <div className={sass.logo}>
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className={sass.header_bottom}>
                        <h1>Recent Likes</h1>
                        <div className={sass.profile_likes}>
                            <div className={sass.avatar}>
                                <img src={circle1} alt="" />
                                <div className={sass.heart}>
                                    <h5><img src={Heart} alt="" className={sass.heart_logo} /> 1</h5>
                                </div>
                            </div>
                            <div className={sass.avatar}>
                                <img src={circle1} alt="" />
                                <div className={sass.heart}>
                                    <h5><img src={Heart} alt="" className={sass.heart_logo} /> 1</h5>
                                </div>
                            </div>
                            <div className={sass.avatar}>
                                <img src={circle1} alt="" />
                                <div className={sass.heart}>
                                    <h5><img src={Heart} alt="" className={sass.heart_logo} /> 1</h5>
                                </div>
                            </div>
                            <div className={sass.avatar}>
                                <img src={circle1} alt="" />
                                <div className={sass.heart}>
                                    <h5><img src={Heart} alt="" className={sass.heart_logo} /> 1</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={sass.massage}>
                        <h1>Messages</h1>
                        <button className={sass.massages}>
                            <div className={sass.circle}></div>
                        </button>
                        <button className={sass.massages}>
                            <div className={sass.circle}></div>
                        </button>
                        <button className={sass.massages}>
                            <div className={sass.circle}></div>
                        </button>
                        <button className={sass.massages}>
                            <div className={sass.circle}></div>
                        </button>
                        <button className={sass.massages}>
                            <div className={sass.circle}></div>
                        </button>
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
    </>
}
