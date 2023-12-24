import { useNavigate } from 'react-router-dom'
import sass from './MChat.module.sass'
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { MainHeader } from '../../../../widgets/mainHeader/ui/mainHeader'
import { UserHistory } from '../../../../features/user-history'
import { Filter } from '../../../../features/filter'
import { Navigation } from '../../../../widgets/footerNavigation'

export function MChat() {
    const navigate = useNavigate()

    const navigateToChat = () => {
        navigate('/menu/mchating')
    }

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
            <Navigation />
        </div>
    </>
}
