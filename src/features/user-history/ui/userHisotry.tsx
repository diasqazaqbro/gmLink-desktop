import { FC, MouseEventHandler, useState } from 'react';
import sass from './userHistory.module.sass'
import categoryItems from '../api/categoryItem'

export type PropsStories = {
  image: string;
  onClick?: MouseEventHandler; 
}

export const UserHistory: FC<PropsStories> = (props) => {
  const { image, onClick } = props
  const [isCreditsPopUpOpen, setCreditsPopUpOpen] = useState(false);

  return categoryItems.map((categoryItem) => {
    return (
      <div
        className={sass.container__stories}>
        <button className={sass.category_outer_circle}>
            <img src={categoryItem.image} />
        </button>
      </div>  
    )
  })
}