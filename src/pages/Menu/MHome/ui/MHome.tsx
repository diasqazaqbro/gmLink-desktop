import sass from './MHome.module.sass'
import { Navigation } from '../../../../widgets/footerNavigation'
import { Card } from '../../../../widgets/Card'
import { Filter } from '../../../../features/filter'

export function MHome() {
    return <>
        <div className={sass.background}>
                <div className={sass.inner}>
                    <div className={sass.connect}>
                        <h1>Dating</h1>
                        <Filter className={sass.filte} />
                    </div>
                    <Card />
                </div>
            <Navigation />
        </div>
    </>
}
