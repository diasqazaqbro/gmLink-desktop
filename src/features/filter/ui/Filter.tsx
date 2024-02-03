import sass from './Filter.module.sass'
import filter from '../../../../public/images/filter.svg'
import { FC, MouseEventHandler } from 'react'
import classNames from 'classnames';

interface FilterProps {
  onClick?: MouseEventHandler; 
  className?: string;
}

export const Filter: FC<FilterProps> = (props) => {
  const { onClick, className } = props
  return (
    <div className={classNames(className, sass.filter, 'filter')}>
      <button onClick={onClick}>
        <img src={filter} alt="" />
      </button>
    </div>
  )
}