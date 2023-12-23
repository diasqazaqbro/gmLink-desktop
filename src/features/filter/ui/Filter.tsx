import sass from './Filter.module.sass'
import filter from '../../../../public/images/filter.svg'

export const Filter = () => {
  return (
    <div className={sass.filter}>
      <button>
        <img src={filter} alt="" />
      </button>
    </div>
  )
}