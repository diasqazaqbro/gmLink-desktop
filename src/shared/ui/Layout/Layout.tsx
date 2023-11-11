import { type ReactNode } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import sass from './Layout.module.sass'

type Props = {
  announcementSlot?: ReactNode
}

export function Layout(props: Props) {
  return (
    <div className={sass.root}>
      {props.announcementSlot}
      <div className={sass.container}>
        <div className={sass.content}>
          <Outlet />
        </div>
      </div>
      <ScrollRestoration />
    </div>
  )
}