import { FC ,MouseEventHandler } from 'react'

import { Link } from 'react-router-dom'

import sass from './GameCard.module.sass'

export type CardProps = {
  /** Айдишка игры **/
  id: string | number;
  /** URL изображение **/
  image: string;
  /** Название игры **/
  name: string; 
  /** Клик на карточку **/
  onClick?: MouseEventHandler;
  /** Переход на игру **/
  routePath: string;
}

export const GameCard: FC<CardProps>  = (props) => {
  const { image, onClick, id, routePath, name } = props

  return (
    <li className={sass.container__item} onClick={onClick}>
      <div className={sass.card_item}>
        <Link to={routePath} className={sass.card_item__img} >
          <img 
            src={image}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />
        </Link>
        <div className={sass.card_item__description}>
          {name && <h1 className={sass.card_item__name}>{name}</h1>}
        </div>
      </div>
    </li>
  )
}