import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { BadgeReport } from '../../../shared/ui/Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';

import sass from './ReportForm.module.sass';

interface MyTextInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  id?: string;
  size?: string;
}

const MyTextInput: React.FC<MyTextInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <textarea {...props} {...field} />
      {meta.touched && meta.error ? <h5 className={sass.error}>{meta.error}</h5> : null}
    </>
  );
};

export const ReportForm: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Formik
      initialValues={{
        reason: '',
        title: '',
        desc: '',
        contact: '',
      }}
      validationSchema={Yup.object({
        reason: Yup.string().min(3, 'Write, please').required('Important!'),
        title: Yup.string().min(5, 'Write, please').required('Important!'),
        desc: Yup.string().min(10, 'Write, please').required('Important!'),
        contact: Yup.string().min(11, 'Write, please').required('Important!'),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className={sass.form}>
        <div className={sass.report}>
          <Link onClick={handleGoBack} to={''}>
            <BadgeReport />
          </Link>
          <h1>Report</h1>
          <h2></h2>
        </div>
        <MyTextInput
          className={sass.reason}
          label="Report"
          placeholder="Scam"
          id="reason"
          name="reason"
          type="reason"
        />
        <MyTextInput
          className={sass.title}
          label="Title"
          placeholder="Briefly describe the problem"
          id="title"
          size="100"
          name="title"
          type="title"
        />
        <MyTextInput
          className={sass.desc}
          label="Description"
          placeholder="Describe the problem you encountered"
          id="desc"
          size="5000"
          name="desc"
          type="desc"
        />
        <label htmlFor="screen">Screenshot</label>
        <div></div>
        <MyTextInput
          className={sass.contact}
          label="Your contact information"
          placeholder="Please enter your email"
          id="contact"
          name="contact"
          type="contact"
        />
        <h3>We will respond to you within 3 business days</h3>
      </Form>
    </Formik>
  );
};