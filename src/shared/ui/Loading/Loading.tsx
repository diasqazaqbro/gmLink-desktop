import ReactLoading from 'react-loading'
import sass from './Loading.module.sass'

export const Loading = () => {
  return (
    <div className={sass.loading}>
      <ReactLoading type={'balls'} color='#fff' />
    </div>
  )
}