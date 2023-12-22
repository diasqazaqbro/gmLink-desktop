import sass from './Search.module.scss'
import Loupe from '../../../../public/images/loupe.svg'
import { FC } from 'react'
import { Enter } from '../../../shared/ui/Input/Enter/Enter';

export type SearchProps = {
  id: number;
}

export const Search: FC<SearchProps> = (props) => {
  const { id } = props
  
  return (
    <div className={sass.root}>
      <Loupe 
        className={sass.loupe} 
      />
      <Enter 
        className={sass.enter}
      />
    </div>
  )
}