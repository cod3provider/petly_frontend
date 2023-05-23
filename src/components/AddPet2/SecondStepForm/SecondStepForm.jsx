import PropTypes from 'prop-types';

import {
  InputStyle,
  LabelStyle,
  DataPickercontainer,
} from './SecondStepForm.styled';

import { Formik, Form } from 'formik';
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

  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    if (!selectedDay) {
      return;
    }
    setFormState(prev => ({ ...prev, birth: selectedDay }));
    setSelectedDay(null);
    setIsDateOpen(false);
  }, [formState, selectedDay]);

  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    // console.log(FormState);
    setStep('third');
    setState(prev => ({
      ...prev,
      ...formState,
    }));
  };

  const secondStepValidationSchema = yup.object().shape({
    namePet: yup
      .string()
      .required("Enter the pet's name")
      .label('namePet')
      .transform(value => value.charAt(0).toUpperCase() + value.slice(1))
      .min(2)
      .max(16),
    // birth: yup
    //   .string()
    //   .required('Enter a date of birth')
    //   .label('birth')
    //   .matches(
    //     /^\d{4}\-\d{2}\-\d{2}$/,
    //     'The date must be in the format DD.MM.YYYY'
    //   ),
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
      // validationSchema={secondStepValidationSchema}
    >
      <Form>
        {(type === 'sell' ||
          type === 'lost/found' ||
          type === 'in good hands') && (
          <>
            <LabelStyle htmlFor="titlePet">Title of add</LabelStyle>
            <InputStyle
              id="titlePet"
              name="titlePet"
              placeholder="Title pet"
              value={formState.titlePet}
              onChange={handleChange}
              required
            />
          </>
        )}
        <LabelStyle htmlFor="namePet">Name pet</LabelStyle>
        <InputStyle
          id="namePet"
          name="namePet"
          placeholder="Name pet"
          value={formState.namePet}
          onChange={handleChange}
          required
        />
        {/* оберни вдів і додай позишн реатів */}
        <LabelStyle htmlFor="birth">Date of birth</LabelStyle>{' '}
        <DataPickercontainer>
          <InputStyle
            id="birth"
            name="birth"
            placeholder="Date of birth"
            value={formState.birth}
            onChange={handleChange}
            onFocus={() => setIsDateOpen(true)}
            // onBlur={() => setIsDateOpen(false)}
            autoComplete="off"
            required
          />
          {isDateOpen && (
            <DatePicker
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          )}
        </DataPickercontainer>
        <LabelStyle htmlFor="breed">Breed</LabelStyle>
        <InputStyle
          id="breed"
          name="breed"
          placeholder="Breed"
          value={formState.breed}
          onChange={handleChange}
          required
        />
        <ButtonPet step={step} setStep={setStep} />
      </Form>
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
