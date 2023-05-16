import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/authOperations';
import AuthFormButton from '../../Buttons/AuthFormButton/AuthFormButton';
import {
  AuthForm,
  ButtonIcon,
  InputStyle,
  InputWrapper,
  LinkWraper,
  StyledEyeIcon,
  StyledEyeIconOff,
} from './LoginForm.style';

function LoginForm() {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const logValidationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Fill the gap')
      .email('Please enter an email')
      .max(254, 'Max 254'),
    password: Yup.string()
      .required('Fill the gap')
      .min(6, 'Enter more than 6 characters')
      .max(16, 'Max 16'),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={logValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          dispatch(login(values));
          resetForm();
          console.log(values);
        }}
      >
        {({
          values,
          // errors,
          // touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <AuthForm onSubmit={handleSubmit}>
            <label htmlFor="email">
              <InputStyle
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {/* {errors.email && touched.email && errors.email} */}
              <ErrorMessage component="div" name="email" />
            </label>

            <label htmlFor="password">
              <InputWrapper>
                <InputStyle
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ButtonIcon
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <StyledEyeIconOff /> : <StyledEyeIcon />}
                </ButtonIcon>
              </InputWrapper>
              {/* {errors.password && touched.password && errors.password} */}
              <ErrorMessage component="div" name="password" />
            </label>

            <AuthFormButton type="submit" disabled={isSubmitting}>
              Login
            </AuthFormButton>
            <LinkWraper>
              <p>Don&#39;t have an account?</p>
              <Link to="/register">Register</Link>
            </LinkWraper>
          </AuthForm>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
