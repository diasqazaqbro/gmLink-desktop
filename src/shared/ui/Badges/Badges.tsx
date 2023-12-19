import React from 'react'
import { Link } from 'react-router-dom'
import sass from './Badges.module.sass'
import arrow  from './assets/arrow_back_ios.svg'
import help  from './assets/help.svg'

interface BadgesProps {
  routePath: string
  toogleModal: () => void
}

export const Badges: React.FC<BadgesProps> = ({ routePath, toogleModal }) => {

  return (
    <>
      <div className={sass.badges}>
        <Link to={routePath} className={sass.arrow}>
          <img src={arrow} alt="" />
        </Link>
        <a onClick={toogleModal} href="" className={sass.help}>
          <img src={help} alt="" />
        </a>
      </div>
    </>
  )
}