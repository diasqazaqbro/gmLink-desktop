import { useEffect, useState } from 'react';
import Dota from '../../../../../public/images/dota2_social 2.png';
import sass from './MGamepad.module.sass';
import { GameCard } from '../../../../shared/ui/Game-card/GameCard';
import { Filter } from '../../../../features/filter';
import { MainHeader } from '../../../../widgets/mainHeader/ui/mainHeader';
import { Navigation } from '../../../../widgets/footerNavigation';
import { Loading } from '../../../../shared/ui/Loading/Loading';

const filterGame = (searchText, listOfGame) => {
    if (!searchText) {
        return listOfGame;
    }
    return listOfGame.filter(({ name }) =>
        name.toLowerCase().includes(searchText.toLowerCase())
    );
};

export function MGamepad() {
    const data = [
        { id: 1, name: 'Dota 2', image: Dota, routePath: '' },
        { id: 2, name: 'Counter Strike 2', image: Dota, routePath: '' },
        { id: 3, name: 'Nigga', image: Dota, routePath: '' }
    ];
    const [gameList, setGameList] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(!loading);
        }, 2600);
    }, []);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredGame = filterGame(searchTerm, data);
            setGameList(filteredGame);
        }, 300);

        return () => clearTimeout(debounce);
    }, [searchTerm, data]);

    return (
        <div className={sass.background}>
            <MainHeader onChange={(e) => setSearchTerm(e.target.value)} />
            <div className={sass.inner}>
                <div className={sass.inner__header}>
                    <h1>Your game</h1>
                    <Filter />
                </div>
                <ul className={sass.cards}>
                    {loading ? <Loading /> : (
                        <>
                            {gameList.map((game) => (
                                <GameCard
                                    id={game.id}
                                    image={game.image}
                                    name={game.name}
                                    routePath={game.routePath}
                                />
                            ))}
                        </>
                    )}
                </ul>
            </div>
            <Navigation />
        </div>
    );
}
