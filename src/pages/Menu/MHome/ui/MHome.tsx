import sass from './MHome.module.sass'
import { Navigation } from '../../../../widgets/footerNavigation'
import { Card } from '../../../../widgets/Card'

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
                    <Card />
                </div>
            <Navigation />
        </div>
    </>
}
