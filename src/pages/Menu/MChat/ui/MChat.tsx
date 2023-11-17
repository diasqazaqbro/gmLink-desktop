import sass from './MChat.module.sass'
import Logo from './assets/Logo.svg'
import circle1 from './assets/circle1.svg'
import circle2 from './assets/circle2.svg'
import Heart from './assets/heart.svg'

export function MChat() {
    return <>
    <div className={sass.background}>
        <div className={sass.container}>
            <div className={sass.mcInner}>
                <div className={sass.mcBox}>
                    <div className={sass.mcHeadertop}>
                        <h1>Chat</h1>
                        <div className={sass.logo}>
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className={sass.mcHeaderbottom}>
                        <h1>Recent Likes</h1>
                        <div>
                            <img src={circle1} alt="" />

                        </div>
                        <div>
                            <img src={circle1} alt="" />

                        </div>
                        <div>
                            <img src={circle1} alt="" />

                        </div>
                        <div>
                            <img src={circle1} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
