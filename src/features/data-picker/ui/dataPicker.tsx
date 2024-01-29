import { ChangeEvent, useRef, useState } from 'react'
import sass from './dataPicker.module.sass'

export const DataPicker = () => {
  const refInput1 = useRef<HTMLInputElement>(null)
  const refInput2 = useRef<HTMLInputElement>(null)
  const refInput3 = useRef<HTMLInputElement>(null)
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')

  const dayPicker = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); 
    const day = parseInt(value, 10); 
    switch (true) {
      case day < 0:
        value = ''; 
        break;
      case day > 31:
        value = '31';
        break;
      default:
        break;
    }

    if(input1.length === 1 && refInput2.current) {
      refInput2.current.focus()
    } else if (input1.length === 0 && refInput1.current) {
      refInput1.current.focus()
    }
    setInput1(value);
  }

  const monthPicker = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    const month = parseInt(value, 10)
    switch (true) {
      case month < 0:
        value = '';
        break;
      case month > 12:
        value = '12';
        break;
      default: 
        break;
    }

    if (value.length === 2 && refInput3.current) {
      refInput3.current.focus();
    } else if (value.length === 0 && refInput1.current) {
      refInput1.current.focus(); 
    }
    setInput2(value);
  }

  const yearPicker = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setInput3(value);
    if (value.length === 0 && refInput2.current) {
      refInput2.current.focus()
    }
  }

  return (
    <>
      <div className={sass.data}>
        <span>Day</span>
        <span>Month</span>
        <span>Year</span>
      </div>
      <div className={sass.picker_container}>
        <div className={sass.input1}><input type="text" ref={refInput1} value={input1} onChange={dayPicker} maxLength={2} /></div>
        <div className={sass.input2}><input type="text" ref={refInput2} value={input2} onChange={monthPicker} maxLength={2} /></div>
        <div className={sass.input3}><input type="text" ref={refInput3} value={input3} onChange={yearPicker} maxLength={4} /></div>
      </div>
    </>
  )
}