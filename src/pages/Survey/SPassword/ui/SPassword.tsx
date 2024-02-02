import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badges } from '../../../../shared/ui/Badges/Badges'
import { PasswordSvg } from '../../../../shared/ui/Icon/Icon'
import { Input } from '../../../../shared/ui/Input/Input'
import sass from './SPassword.module.sass'
import { Button } from '../../../../shared/ui/Button/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Contact } from '../../../../shared/ui/Contact/Contact'

export const SPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
                .min(8, 'Minimum 8 characters')
    }),
    onSubmit: values => console.log(JSON.stringify(values, null, 2))
  });
  const [password2, setPassword2] = useState('')
  const [showDivBlock, setShowDivBlock] = useState(false);
  const navigate = useNavigate()

  const similarPassword = () => {
    return formik.values.password.length > 7 && formik.values.password === password2;
  }
  const passwordCheck = () => {
    if (!similarPassword()) {
      setShowDivBlock(true);
    } else {
      setShowDivBlock(!showDivBlock);
      navigate(`/registration/photo`)
    }
  };
  const handlePasswordChange = (e: unknown) => {
    formik.handleChange(e);
    setShowDivBlock(false);
  };

  return (
    <div className={sass.background}>
      <Badges 
        routePath='/registration/name'
        className={sass.badge}          
      />
      <div className={sass.container}>
        <div className={sass.inner}>
          <div className={sass.inner_main}>
            <h1>Please create a strong password !</h1>
            <PasswordSvg />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className={sass.inner_input}>
              <div className={sass.input__container}>
                <Input id='password' name='password' onBlur={formik.handleBlur} onChange={handlePasswordChange} onClear={() => setPassword2('')} placeholder='Create a password' value={formik.values.password} type='password' className={`${sass.input}`} />
                {formik.errors.password && formik.touched.password ? <div className={sass.error}>{formik.errors.password}</div> : null}
              </div>
                <Input type='password' value={password2} onChange={e => setPassword2(e.target.value)} onClear={() => setPassword2('')} placeholder='Repeat password' className={sass.input} />
            </div>
            <div className={sass.inner_btn}>
              <Button label='Confirm' onClick={passwordCheck} className={`${similarPassword() ? sass.active_btn : ''} ${sass.buton}`}/>
            </div>
          </form>
          {showDivBlock ? <h1 className={sass.password_check}>Password don't match</h1> : null}
          <Contact label='Contact Us' routePath='/report' />
        </div>
      </div>
    </div>
  )
}