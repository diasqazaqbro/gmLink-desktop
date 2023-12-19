import { Delete } from './Delete/Delete'
import { Enter } from './Enter/Enter'
import sass from './Input.module.sass'

export const Input = ({ onChange, onClear, children, placeholder, value }) => {
  return (
    <>
      <div className={sass.input}>
        <Enter onChange={onChange} placeholder={placeholder} value={value}/>
        <Delete onClear={onClear} />
      </div>
      {children}
    </>
  )
}
