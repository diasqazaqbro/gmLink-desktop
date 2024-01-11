import { FC, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import sass from './Badges.module.sass'
import arrow  from './assets/arrow_back_ios.svg'
import help  from './assets/help.svg'

export type BadgesProps = {
  routePath: string;
  toogleModal?: MouseEventHandler
}

export const Badges: FC<BadgesProps> = (props) => {
  const { routePath, toogleModal } = props

  return (
    <>
      <div className={sass.badges}>
        <Link to={routePath} className={sass.arrow}>
          <img src={arrow} alt="arrow" />
        </Link>
        <a onClick={toogleModal} href="" className={sass.help}>
          <img src={help} alt="help" />
        </a>
      </div>
    </>
  )
}