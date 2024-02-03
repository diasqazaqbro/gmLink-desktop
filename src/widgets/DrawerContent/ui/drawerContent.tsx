import { CheckBox } from '../../../shared/ui/Checkbox/Checkbox'
import { BadgeReport } from '../../../shared/ui/Icon/Icon'
import sass from './drawerContent.module.sass'

interface DrawerProps {
  onClick?: () => void;
}

export const DrawerContent: React.FC<DrawerProps> = (props) => {
  const { onClick } = props

  return (
    <div className={sass.container}>
      <GameContent onClick={onClick} />
    </div>
  )
}

interface ContentProps {
  onClick?: () => void;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameContent: React.FC<ContentProps> = (props) => {
  const { onClick } = props

  return (
    <>
      <div className={sass.head_content}>
        <a onClick={onClick}>
          <BadgeReport />
        </a>
        <h1>Filter</h1>
        <h2></h2>
      </div>
      <div className={sass.main_content}>
        <CheckBox />
      </div>
    </>
  )
}