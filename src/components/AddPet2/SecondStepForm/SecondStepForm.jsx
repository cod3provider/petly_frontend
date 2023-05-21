import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { useEffect, useState } from 'react';
import ButtonPet from '../ButtonPet/ButtonPet';

import DatePicker from '../../common/DatePicker';

const SecondStepForm = ({ setStep, setState, type, step }) => {
  const [FormState, setFormState] = useState({
    namePet: '',
    birth: '',
    breed: '',
    titlePet: '',
  });

  // ===============================================================
  const [selectedDay, setSelectedDay] = useState(null);
  const [isDateOpen, setIsDateOpen] = useState(false);

  useEffect(() => {
    if (!selectedDay) {
      return;
    }
    setFormState(prev => ({ ...prev, birth: selectedDay }));
    setSelectedDay(null);
    setIsDateOpen(false);
  }, [FormState, selectedDay]);
  // ===============================================================

  // function goBack() {
  //   history.back();
  // }
  // const handleBack = () => {
  //   setStep('first');
  //   setState(prev => ({
  //     ...prev,
  //     ...FormState,
  //   }));
  // };
  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setStep('third');
    setState(prev => ({
      ...prev,
      ...FormState,
    }));
  };

  return (
    <Formik initialValues={FormState} onSubmit={handleSubmit}>
      <Form>
        {(type === 'sell' ||
          type === 'lost/found' ||
          type === 'in good hands') && (
          <>
            <label htmlFor="titlePet">Title of add</label>
            <Field
              id="titlePet"
              name="titlePet"
              placeholder="Title pet"
              value={FormState.titlePet}
              onChange={handleChange}
              required
            />
          </>
        )}
        <label htmlFor="namePet">Name pet</label>
        <Field
          id="namePet"
          name="namePet"
          placeholder="Name pet"
          value={FormState.namePet}
          onChange={handleChange}
          required
        />
        <label htmlFor="birth">Date of birth</label>
        <Field
          id="birth"
          name="birth"
          placeholder="Date of birth"
          value={FormState.birth}
          onChange={handleChange}
          onFocus={() => setIsDateOpen(true)}
          required
        />

        {/* // =============================================================== */}
        {isDateOpen && (
          <DatePicker
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        )}

        {/* // =============================================================== */}

        <label htmlFor="breed">Breed</label>
        <Field
          id="breed"
          name="breed"
          placeholder="Breed"
          value={FormState.breed}
          onChange={handleChange}
          required
        />
        {/* <button type="button" onClick={handleBack}>
          back
        </button> */}
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
};
