/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/authOperations';
import AuthFormButton from '../../Buttons/AuthFormButton/AuthFormButton';
// import { SectionStyled } from '../../common/Section/Section.styled';
import {
  AuthForm,
  ButtonIcon,
  InputStyle,
  InputWrapper,
  LinkWraper,
  StyledEyeIcon,
  StyledEyeIconOff,
} from './RegisterForm.style';
// import ModalCongrats from 'components/Modal/ModalCongrats/ModalCongrats';
// import { toast } from 'react-toastify';

function RegisterForm() {
  const dispatch = useDispatch();
  //  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const regValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Mail is required'),
    password: Yup.string()
      .required()
      .min(6)
      .max(16)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
        'Password must contain at least 1 UPPERCASE letter, 1 lowercase letter, and 1 number.'
      ),
    confirmPassword: Yup.string()
      .required('Fill the gap')
      .oneOf([Yup.ref('password'), null], 'Passwords must match!'),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={regValidationSchema}
        onSubmit={(values, { resetForm }) => {
          const newUser = {
            email: values.email,
            password: values.password,
          };
          dispatch(register(newUser));
          resetForm();
          console.log(newUser);
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

            <label htmlFor="passwordRepeat">
              <InputWrapper>
                <InputStyle
                  type={passwordVisible ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <ButtonIcon
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <StyledEyeIconOff /> : <StyledEyeIcon />}
                </ButtonIcon>
              </InputWrapper>

              {/* {errors.password && touched.password && errors.password} */}
              <ErrorMessage component="div" name="confirmPassword" />
            </label>

            <AuthFormButton
              type="submit"
              disabled={isSubmitting}
              children="Registration"
              // onClick={openModal}
            ></AuthFormButton>
            {/* {isModalOpen && <ModalCongrats onClose={closeModal} />} */}
            <LinkWraper>
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </LinkWraper>
          </AuthForm>
        )}
      </Formik>
    </>
  );
}

export default RegisterForm;
