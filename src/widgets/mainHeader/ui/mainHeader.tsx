import { SearchBar } from '../../../features/search/ui/Search'
import help from '../../../../public/images/help.svg'
import sass from './mainHeader.module.sass'
import { FC, ChangeEvent, memo } from 'react';

interface HeaderProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const MainHeader: FC<HeaderProps> = memo((props) => {
  const { onChange } = props

  return (
    <div className={sass.header}>
      <SearchBar onChange={onChange}/>
      <a href=""><img src={help} alt="" /></a>
    </div>
  )
})