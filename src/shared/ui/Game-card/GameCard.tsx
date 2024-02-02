import { FC ,MouseEventHandler, useState } from 'react'
// import axios from 'axios'

import sass from './GameCard.module.sass'

export type CardProps = {
  /** Айдишка игры **/
  id?: string | number;
  /** URL изображение **/
  image?: string;
  /** Название игры **/
  name?: string; 
  /** Клик на карточку **/
  onClick?: MouseEventHandler;
  /** Переход на игру **/
  routePath?: string;
}

export const GameCard: FC<CardProps> = (props) => {
  const [active, setActive] = useState(false)
  const { onClick, image, id, name } = props

  // useEffect(() => {
  //   axios.get('./api/MOCK_DATA.json')
  //     .then(response => {
  //       setGames(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data: ', error);
  //     });
  // }, []);

  return (
    <li key={id} className={sass.container__item} onClick={onClick}>
      <div className={sass.card_item}>
        <button onClick={() => setActive(!active)} className={`${sass.card_item__img} ${active ? sass.active : ''}`} >
          <img 
            src={image}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
            loading='lazy'
          />
        </button>
        <div className={sass.card_item__description}>
          {name && <h1 className={sass.card_item__name}>{name}</h1>}
        </div>
      </div>
    </li>
  )
}