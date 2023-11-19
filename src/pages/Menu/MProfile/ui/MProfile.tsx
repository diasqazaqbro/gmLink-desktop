import {Link} from 'react-router-dom'
import sass from './MProfile.module.sass'
import Chat from './assets/ci_users.svg'
import Gamepad from './assets/ci_puzzle.svg'
import Home from './assets/ci_house-01.svg'
import Profile from './assets/ci_user-square.svg'

export function MProfile() {
    return <>
    <div className={sass.background}>
        <div className={sass.inner}>
            <div className={sass.profile}>
                <div className={sass.info}>
                    <div className={sass.circle}></div>
                    <div className={sass.info_text}>
                        <h1>Artem / 18</h1>
                        <div className={sass.cause}>
                            <h2>Find in love</h2>
                        </div>
                    </div>
                </div>
                <div className={sass.card}>
                    <h1>Male</h1>
                </div>
                <div className={sass.card}>
                    <h1>Гороскоп : рак </h1>
                </div>
                <div className={sass.card}>
                    <h1>не пью</h1>
                </div>
                <div className={sass.card}>
                    <h1>не курю</h1>
                </div>
                <div className={sass.card}>
                    <h1>свободен</h1>
                </div>
                <div className={sass.card}>
                    <h1>где учился ?</h1>
                </div>
                <div className={sass.card}>
                    <h1>где работаешь ?</h1>
                </div>
                <div className={sass.card}>
                    <h1>что нравится ? (хэштэгами)</h1>
                </div>
                <div className={sass.card}>
                    <h1>пару предложений о себе</h1>
                </div>
                <div className={sass.card}>
                    <h1>Скролл с фото</h1>
                </div>
                <div className={sass.card}>
                    <h1>Вставку со стимом или дискордом</h1>
                </div>
                <div className={sass.card}>
                    <h1>любимый жанр игр</h1>
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
