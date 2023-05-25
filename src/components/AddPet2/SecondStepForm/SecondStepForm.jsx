import PropTypes from 'prop-types';

import {
  InputStyle,
  LabelStyle,
  DataPickercontainer,
  InputBox,
  FormContainer,
  FormStyledBox,
} from './SecondStepForm.styled';

import { Formik } from 'formik';
import * as yup from 'yup';

import { useState, useEffect } from 'react';
import ButtonPet from '../ButtonPet/ButtonPet';
import DatePicker from '../../common/DatePicker';

const SecondStepForm = ({ setStep, setState, type, step, state }) => {
  const [formState, setFormState] = useState({
    namePet: state.namePet || '',
    birth: state.birth || '',
    breed: state.breed || '',
    titlePet: state.titlePet || '',
  });

  const [isDateOpen, setIsDateOpen] = useState(false);

  const [selectedDay, setSelectedDay] = useState('');

  useEffect(() => {
    if (!selectedDay) {
      return;
    }
    setIsDateOpen(false);
  }, [formState, selectedDay]);

  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log(formState);
    setFormState(prev => ({ ...prev, birth: selectedDay }));
    setStep('third');
  };

  const secondStepValidationSchema = yup.object().shape({
    namePet: yup
      .string()
      .required("Enter the pet's name")
      .label('namePet')
      .transform(value => value.charAt(0).toUpperCase() + value.slice(1))
      .min(2)
      .max(16),
    birth: yup.string().required('Enter a date of birth').label('birth'),
    breed: yup
      .string()
      .required('Enter the breed of the pet')
      .label('breed')
      .transform(value => value.charAt(0).toUpperCase() + value.slice(1))
      .min(2)
      .max(16),
  });

  return (
    <Formik
      initialValues={formState}
      onSubmit={handleSubmit}
      validationSchema={secondStepValidationSchema}
    >
      {({ errors, touched, setFieldValue }) => (
        <FormContainer>
          <FormStyledBox>
            {(type === 'sell' ||
              type === 'lost/found' ||
              type === 'in good hands') && (
              <InputBox>
                <LabelStyle htmlFor="titlePet">Title of add</LabelStyle>
                <InputStyle
                  id="titlePet"
                  name="titlePet"
                  placeholder="Title pet"
                  required
                />
                {errors.titlePet && touched.titlePet ? (
                  <div>{errors.titlePet}</div>
                ) : null}
              </InputBox>
            )}
            <InputBox>
              <LabelStyle htmlFor="namePet">Name pet</LabelStyle>
              <InputStyle
                id="namePet"
                name="namePet"
                placeholder="Name pet"
                required
              />
              {errors.namePet && touched.namePet ? (
                <div>{errors.namePet}</div>
              ) : null}
            </InputBox>

            <InputBox>
              <LabelStyle htmlFor="birth">Date of birth</LabelStyle>{' '}
              <DataPickercontainer>
                <InputStyle
                  id="birth"
                  name="birth"
                  value={selectedDay}
                  placeholder="Date of birth"
                  onFocus={() => setIsDateOpen(true)}
                  autoComplete="off"
                  required
                />
                {errors.birth && touched.birth ? (
                  <div>{errors.birth}</div>
                ) : null}
                {isDateOpen && (
                  <DatePicker
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                  />
                )}
              </DataPickercontainer>
            </InputBox>
            <InputBox>
              <LabelStyle htmlFor="breed">Breed</LabelStyle>
              <InputStyle
                id="breed"
                name="breed"
                placeholder="Breed"
                required
              />
              {errors.breed && touched.breed ? <div>{errors.breed}</div> : null}
            </InputBox>
          </FormStyledBox>

          <ButtonPet step={step} setStep={setStep} />
        </FormContainer>
      )}
    </Formik>
  );
};

export default SecondStepForm;

SecondStepForm.propTypes = {
  setStep: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
};
