import { SearchBar } from '../../../features/search/ui/Search'
import help from '../../../../public/images/help.svg'
import sass from './mainHeader.module.sass'

export const MainHeader = () => {
  return (
    <div className={sass.header}>
      <SearchBar />
      <a href=""><img src={help} alt="" /></a>
    </div>
  )
}