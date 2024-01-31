import sass from './Filter.module.sass'
import filter from '../../../../public/images/filter.svg'
import { FC, MouseEventHandler } from 'react'

interface FilterProps {
  onClick?: MouseEventHandler; 
}

export const Filter: FC<FilterProps> = (props) => {
  const { onClick } = props
  return (
    <div className={sass.filter}>
      <button onClick={onClick}>
        <img src={filter} alt="" />
      </button>
    </div>
  )
}