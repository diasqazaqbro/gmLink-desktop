import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import sass from './LoginForm.module.sass';
import { Password } from 'primereact/password';
import { Input } from '../../../../../shared/ui/Input/Input';

export const LoginForm = () => {
  const [input, setInput] = useState('')
  const formik = useFormik({
    initialValues: {
      text: '',
      password: ''
    },
    validationSchema: Yup.object({
      text: Yup.string()
            .min(5, 'Enter a valid email'),
      password: Yup.string()
                .min(8, 'Password must contain 8 characters')
    }),
    onSubmit: values => console.log(JSON.stringify(values, null, 2))
  })

  return (
    <>
      <form className={sass.form} onSubmit={formik.handleSubmit}>
        <div className={sass.email}>
          <label htmlFor="text">Email or Number</label>
          <Input className={sass.input_data} onClear={() => setInput('')} onChange={e => setInput(e.target.value)} placeholder='Email or Number phone' value={input} type='text' />
        </div>
        {formik.errors.text && formik.touched.text ? <div className={sass.error}>{formik.errors.text}</div> : null}
        <div className={sass.password}>
          <label htmlFor="password">Password</label>
          <div className={sass.input_password}>
            <Password 
              type='password'
              id='password' 
              name='password' 
              onBlur={formik.handleBlur} 
              value={formik.values.password} 
              onChange={formik.handleChange} 
              toggleMask 
              placeholder='Enter Password'
            />
          </div>
        {formik.errors.password && formik.touched.password ? <div className={sass.error}>{formik.errors.password}</div> : null}
        </div>
      </form>
    </>
  )
}