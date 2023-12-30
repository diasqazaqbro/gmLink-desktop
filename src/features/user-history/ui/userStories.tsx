import { FC, MouseEventHandler, useState } from 'react';
import sass from './userStories.module.sass'
import categoryItems from '../api/categoryItem'

export type PropsStories = {
  image: string;
  onClick?: MouseEventHandler; 
}

export const UserHistory: FC<PropsStories> = () => {
  // const { image, onClick } = props
  // const [isCreditsPopUpOpen, setCreditsPopUpOpen] = useState(false);

// Гуляют ковбой с индианкой. Развел он её на интимную близость, отводит в прерии за кактус. В процессе занятия любовью, ковбой чувствует, как неимоверно сильно хочет ссать.
// Он и говорит:
// - Слушай, дорогая, я сейчас отлучусь в кусты, отолью, вернусь и мы с тобой продолжим.
// - Ты что, не знаешь? Тут живет быстрый Гонсалес!
// - ...?
// - Ну, как только ты отойдешь, он прибежит и начнет меня иметь.
// - Ну хорошо, тогда я отвернусь, отолью, повернусь и мы с тобой продолжим.
// - Нет, ты не понял - это быстрый, очень быстрый Гонсалес.
// - Неужели такой быстрый?
// - Да капец какой быстрый.
// - Хорошо. Тогда я выну, отверну в сторону, отолью, а тебе заткну пальчиком, чтоб Гонсалес ничего не сделал.
// Девушка, подумав, соглашается. Парень достает, отворачивает, и засовывает палец в ж*пу быстрому Гонсалесу.
// АХАХАХАХАХАХХАХАХАХАХАХАХАХАХАХАХХАХАХАХ

  return categoryItems.map((categoryItem) => {
    return (
      <>
        <div className={sass.container__stories}>
            <button className={sass.category_outer_circle}>
              <div className={sass.category_inner_circle}>
                <img src={categoryItem.image} className={sass.category_avatar}/>
              </div>
            </button>
            <div className={sass.category_name}>{categoryItem.name}</div>  
          </div>
      </>
    )
  })
}