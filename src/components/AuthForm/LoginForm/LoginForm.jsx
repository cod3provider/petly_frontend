import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(false);

  const handleEmailChange = event => {
    const { value } = event.target;
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      value
    );
    setIsEmailValid(isValidEmail);
  };

  const handlePasswordChange = event => {
    const { value } = event.target;
    const isValidPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/.test(value);
    setIsPasswordSecure(isValidPassword);
  };

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
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log(values);
          const action = await dispatch(login(values)); // add await before dispatch and save result to a variable
          if (login.fulfilled.match(action)) {
            navigate('/userPage');
          }
          resetForm();
          +setSubmitting(false);
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
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
                onChange={event => {
                  handleChange(event);
                  handleEmailChange(event);
                }}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && errors.email}
              />
              {touched.email && errors.email ? (
                <ErrorMessage name="email" />
              ) : isEmailValid ? (
                'Email is valid'
              ) : (
                ' '
              )}
            </label>

            <label htmlFor="password">
              <InputWrapper>
                <InputStyle
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  onChange={event => {
                    handleChange(event);
                    handlePasswordChange(event);
                  }}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && errors.password}
                />
                <ButtonIcon
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <StyledEyeIconOff /> : <StyledEyeIcon />}
                </ButtonIcon>
              </InputWrapper>
              {touched.password && errors.password ? (
                <ErrorMessage name="password" />
              ) : isPasswordSecure ? (
                'Password is secure'
              ) : (
                ' '
              )}
            </label>

            <AuthFormButton type="submit" disabled={isSubmitting}>
              Login
            </AuthFormButton>
            <LinkWraper>
              <p>Don&#39;t have an account?</p>
              <Link to="/register">Register</Link>
              <Link to="http://localhost:8989/users/google">Google</Link>
            </LinkWraper>
          </AuthForm>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
