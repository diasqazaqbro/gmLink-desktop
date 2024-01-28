import { FC, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import sass from './Badges.module.sass'
import arrow  from './assets/arrow_back_ios.svg'
import help  from './assets/help.svg'
import cn from 'classnames'

export type BadgesProps = {
  routePath: string;
  onClick?: MouseEventHandler;
  className?: string;
}

export const Badges: FC<BadgesProps> = (props) => {
  const { routePath, onClick,className } = props

  return (
    <>
      <div className={cn(className, sass.badges, 'badges')}>
        <Link to={routePath} className={sass.arrow}>
          <img src={arrow} alt="arrow" />
        </Link>
        <a onClick={onClick} className={sass.help}>
          <img src={help} alt="help" />
        </a>
      </div>
    </>
  )
}