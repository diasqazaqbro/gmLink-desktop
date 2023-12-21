import { Delete } from './Delete/Delete'
import { Enter } from './Enter/Enter'
import sass from './Input.module.sass'

export const Input = ({ onChange, onClear, children, placeholder, value, type }) => {
  return (
    <>
      <div className={sass.input}>
        <Enter onChange={onChange} placeholder={placeholder} value={value} type={type}/>
        <Delete onClear={onClear} />
      </div>
      {children}
    </>
  )
}
