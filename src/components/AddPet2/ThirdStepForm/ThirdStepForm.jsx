import { Formik, Field, Form } from 'formik';
import { BsGenderFemale } from 'react-icons/bs';
import { BsGenderMale } from 'react-icons/bs';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ThirdStepForm = ({ setStep, state, setState, type }) => {
  const [FormState, setFormState] = useState({
    location: '',
    price: '',
    comments: '',
    image: '',
    sex: '',
  });

  const handleBack = () => {
    setStep('first');
  };

  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setState(prev => ({
      ...prev,
      ...FormState,
    }));

    console.log('Отправляем запрос на сервер с карточкой:', state);

    setStep('first');
  };

  return (
    <Formik initialValues={FormState} onSubmit={handleSubmit}>
      <Form>
        {(type === 'sell' || type === 'lost/found') && (
          <>
            <label htmlFor="picked">The Sex</label>

            <Field styled="none" type="radio" name="picked" value="Female" />
            <BsGenderFemale />

            <Field styled="none" type="radio" name="picked" value="Male" />
            <BsGenderMale />
            <label htmlFor="location">Location</label>
            <Field
              id="location"
              name="location"
              placeholder="Location"
              value={FormState.location}
              onChange={handleChange}
            />
          </>
        )}
        {type === 'sell' && (
          <>
            <label htmlFor="price">Price</label>
            <Field
              id="price"
              name="price"
              placeholder="Price"
              value={FormState.price}
              onChange={handleChange}
            />
          </>
        )}

        <label htmlFor="price">Load the pet&#39;s image:</label>
        <Field
          id="image"
          type="file"
          name="image"
          value={FormState.image}
          onChange={handleChange}
        />
        {/* style resize: none; */}
        <label htmlFor="Comments">Comments</label>
        <Field
          id="comments"
          name="comments"
          placeholder="Type breed"
          value={FormState.comments}
          onChange={handleChange}
          type="textarea"
        />
        <button type="button" onClick={handleBack}>
          back
        </button>
        <button type="submit">Done</button>
      </Form>
    </Formik>
  );
};

export default ThirdStepForm;

ThirdStepForm.propTypes = {
  setStep: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};
