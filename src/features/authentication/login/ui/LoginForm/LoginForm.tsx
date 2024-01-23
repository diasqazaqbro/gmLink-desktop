import { useFormik } from 'formik';
import * as Yup from 'yup'
import sass from './LoginForm.module.sass';
import { Password } from 'primereact/password';

export const LoginForm = () => {
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
          <label htmlFor="text">Email or Number <span>*</span></label>
          <div className={sass.input_password}>
            <input></input>
          </div>
        </div>
        {formik.errors.text && formik.touched.text ? <div className={sass.error}>{formik.errors.text}</div> : null}
        <div className={sass.password}>
          <label htmlFor="password">Password <span>*</span></label>
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