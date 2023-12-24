// import { useState } from 'react'
import Dota from '../../../../../public/images/dota2_social 2.png'
import sass from './MGamepad.module.sass'
import { GameCard } from '../../../../shared/ui/Game-card/GameCard'
import { Filter } from '../../../../features/filter'
import { MainHeader } from '../../../../widgets/mainHeader/ui/mainHeader'
import { Navigation } from '../../../../widgets/footerNavigation'


export function MGamepad() {
    // const [gameList, setGameList] = useState([])

    return <>
        <div className={sass.background}>
            <MainHeader />
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
            <Navigation />
        </div>
    </>
}
