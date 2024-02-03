import { memo, useCallback, useEffect, useRef, useState } from 'react';
import Dota from '../../../../../public/images/dota2_social 2.png';
import sass from './MGamepad.module.sass';
import { GameCard } from '../../../../shared/ui/Game-card/GameCard';
import { Filter } from '../../../../features/filter';
import { MainHeader } from '../../../../widgets/mainHeader/ui/mainHeader';
import { Navigation } from '../../../../widgets/footerNavigation';
import { Loading } from '../../../../shared/ui/Loading/Loading';
import { DrawerComponent } from '../../../../features/drawer';

interface Game {
    id: number;
    name: string;
    image: string;
    routePath: string;
}

export const MGamepad = memo(() => {
    const dataRef = useRef<Game[]>([
        { id: 1, name: 'Dota 2', image: Dota, routePath: '' },
        { id: 2, name: 'Counter Strike 2', image: Dota, routePath: '' },
        { id: 3, name: 'Nigga', image: Dota, routePath: '' }
    ]);
    const [viewFilter, setViewFilter] = useState(false)
    const [gameList, setGameList] = useState<Game[]>(dataRef.current);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const filterGame = useCallback((searchText: string, listOfGame: Game[]) => {
        if (!searchText) {
            return listOfGame;
        }
        return listOfGame.filter(({ name }) =>
            name.toLowerCase().includes(searchText.toLowerCase())
        );
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2600);
    }, []);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredGame = filterGame(searchTerm, dataRef.current);
            setGameList(filteredGame);
        }, 300);

        return () => clearTimeout(debounce);
    }, [searchTerm, filterGame]);

    return (
        <div className={sass.background}>
            <MainHeader onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} />
            <div className={sass.inner}>
                <div className={sass.inner__header}>
                    <h1>Your game</h1>
                    <Filter onClick={() => setViewFilter(!viewFilter)}/>
                </div>
                <ul className={sass.cards}>
                    {loading ? <Loading /> : (
                        <>
                            {gameList.map((game) => (
                                <GameCard
                                    key={game.id}
                                    image={game.image}
                                    name={game.name}
                                    routePath={game.routePath}
                                />
                            ))}
                        </>
                    )}
                </ul>
            </div>
            <DrawerComponent active={viewFilter} setActive={() => setViewFilter(!viewFilter)} />
            <Navigation />
        </div>
    );
});
