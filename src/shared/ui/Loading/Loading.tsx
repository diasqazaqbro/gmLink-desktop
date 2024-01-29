import { FC } from 'react';
import sass from './Loading.module.sass'
import { HashLoader } from 'react-spinners'

interface LoadingProps {
  text?: string;
}

export const Loading: FC<LoadingProps> = (props) => {
  const { text } = props
  return (
    <div className={sass.loading}>
      <HashLoader color="#5571FF" style={{ position: 'absolute', top: '50%', left: '50%' }} />
      <h5>{text}</h5>
    </div>
  )
}