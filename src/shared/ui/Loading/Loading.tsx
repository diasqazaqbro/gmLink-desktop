import sass from './Loading.module.sass'
import { HashLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div className={sass.loading}>
      <HashLoader color="#5571FF" />
    </div>
  )
}