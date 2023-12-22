import { Delete } from './Delete/Delete'
import { Enter } from './Enter/Enter'
import sass from './Input.module.sass'

export const Input = ({ onChange, onClear, children, placeholder, value, type, className }) => {
  const enterProps = { onChange, placeholder, value, type, className };
  const deleteProps = { onClear, className };
  
  return (
    <>
      <div className={sass.input}>
        <Enter {...enterProps}/>
        <Delete {...deleteProps} />
      </div>
      {children}
    </>
  )
}
