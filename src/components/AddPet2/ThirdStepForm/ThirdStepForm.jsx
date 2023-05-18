import { Formik, Field, Form } from 'formik';
import { BsGenderFemale } from 'react-icons/bs';
import { BsGenderMale } from 'react-icons/bs';
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ButtonPet from '../ButtonPet/ButtonPet';
const ThirdStepForm = ({ setStep, state, setState, type, step }) => {
  const [formState, setFormState] = useState({
    location: '',
    price: '',
    comments: '',
    image: '',
    sex: '',
  });

  axios.defaults.baseURL =
    'https://your-pet-backend-jfrs.onrender.com/api-docs';

  // const handleBack = () => {
  //   setStep('second');
  // };

  const handleChange = e => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setState(prev => ({
      ...prev,
      ...formState,
      // type: values.picked,
    }));
    console.log('Отправляем запрос на сервер с карточкой:', state);

    // try {
    //   const response = await axios.post('/', FormState);
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(error.message);
    // }

    setStep('first');
  };

  return (
    <>
      <Formik initialValues={formState} onSubmit={handleSubmit}>
        <Form>
          {(type === 'sell' ||
            type === 'lost/found' ||
            type === 'in good hands') && (
            <>
              <p>The Sex</p>
              <div id="my-radio-group"></div>
              <div role="group" aria-labelledby="my-radio-group">
                <label htmlFor="sex">Female</label>
                <Field
                  id="sex"
                  name="sex"
                  styled="none"
                  type="radio"
                  value={(formState.sex = 'Female')}
                  required
                />
                <BsGenderFemale />

                <label htmlFor="sex">Male</label>
                <Field
                  id="sex"
                  name="sex"
                  styled="none"
                  type="radio"
                  value={(formState.sex = 'Male')}
                  required
                />
                <BsGenderMale />
                <div></div>
              </div>
              <label htmlFor="location">Location</label>
              <Field
                id="location"
                name="location"
                placeholder="Location"
                value={formState.location}
                onChange={handleChange}
                required
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
                value={formState.price}
                onChange={handleChange}
                required
              />
            </>
          )}

          <label htmlFor="price">Load the pet&#39;s image:</label>
          <Field
            id="image"
            type="file"
            name="image"
            value={formState.image}
            onChange={handleChange}
            required
          />
          {/* style resize: none; */}
          <label htmlFor="Comments">Comments</label>
          <Field
            id="comments"
            name="comments"
            placeholder="Type breed"
            value={formState.comments}
            onChange={handleChange}
            type="textarea"
            required
          />
          {/* <button type="button" onClick={handleBack}>
            back
          </button> */}
          <ButtonPet step={step} setStep={setStep} />
        </Form>
      </Formik>
    </>
  );
};

export default ThirdStepForm;

ThirdStepForm.propTypes = {
  setStep: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
};
