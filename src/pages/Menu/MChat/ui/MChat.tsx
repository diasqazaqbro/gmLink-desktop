import sass from './MChat.module.sass';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { MainHeader } from '../../../../widgets/mainHeader/ui/mainHeader';
import { UserHistory } from '../../../../features/user-history';
import { Filter } from '../../../../features/filter';
import { Navigation } from '../../../../widgets/footerNavigation';
import { useState } from 'react';
import { Modal } from '../../../../shared/ui/Modal';
import { DrawerComponent } from '../../../../features/drawer/ui/drawer';

export function MChat() {
    const [viewStories, setViewStories] = useState(false);
    const [viewFilter, setViewFilter] = useState(false);

    return (
        <div className={sass.background}>
            <MainHeader />
            <div className={sass.inner}>
                <div className={sass.inner__header}>
                    <h1>Chat</h1>
                </div>
                <div className={sass.stories}>
                    <ScrollingCarousel >
                        {[<UserHistory onClick={() => setViewStories(!viewFilter)} key={1} />]}
                    </ScrollingCarousel>
                </div>
                <div className={sass.inner__title}>
                    <h1>Messages</h1>
                    <Filter onClick={() => setViewFilter(!viewFilter)} />
                </div>
                <DrawerComponent active={viewFilter} setActive={setViewFilter} />
            </div>
            <Modal active={viewStories} setActive={() => setViewStories(!viewStories)}>
                <div>
                    <h1 style={{ color: 'white' }}>здесь типа сторисы</h1>
                </div>
            </Modal>
            <Navigation />
        </div>
    );
}
