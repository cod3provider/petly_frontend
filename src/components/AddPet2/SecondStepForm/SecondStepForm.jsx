import PropTypes from 'prop-types';

import { InputStyle, LabelStyle, DataPickercontainer } from './SecondStepForm.styled';
import { Formik, Field, Form } from 'formik';
import { useState, useEffect } from 'react';
import ButtonPet from '../ButtonPet/ButtonPet';
import DatePicker from '../../common/DatePicker';


const SecondStepForm = ({ setStep, setState, type, step, state }) => {
  const [FormState, setFormState] = useState({
    namePet: state.namePet,
    birth: state.birth,
    breed: state.breed,
    titlePet: state.titlePet,
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
  }, [FormState, selectedDay]);

  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log(FormState);
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
            <LabelStyle htmlFor="titlePet">Title of add</LabelStyle>
            <InputStyle
              id="titlePet"
              name="titlePet"
              placeholder="Title pet"
              value={FormState.titlePet}
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
          value={FormState.namePet}
          onChange={handleChange}
          required
        />

        {/* оберни вдів і додай позишн реатів */}
<LabelStyle htmlFor="birth">Date of birth</LabelStyle>        <DataPickercontainer>
          <InputStyle
            id="birth"
            name="birth"
            placeholder="Date of birth"
            value={FormState.birth}
            onChange={handleChange}
            onFocus={() => setIsDateOpen(true)}
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
          value={FormState.breed}
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
