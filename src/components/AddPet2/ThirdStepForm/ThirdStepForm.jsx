import { Formik, Field, Form } from 'formik';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as yup from 'yup';
import ButtonPet from '../ButtonPet/ButtonPet';

const ThirdStepForm = ({ setStep, state, setState, type, step }) => {
  const [formState, setFormState] = useState({
    location: '',
    price: '',
    comments: '',
    image: '',
    sex: '',
  });
  const [file, setFile] = useState(null); // Значення file початково встановлено як null
  const genders = ['Female', 'Male'];
  axios.defaults.baseURL =
    'https://your-pet-backend-jfrs.onrender.com/api-docs';

  const handleChange = e => {
    console.log(e.target.name);
    if (e.target.name === 'image') {
      const selectedFile = e.target.files[0];
      console.log(selectedFile);
      setFile(URL.createObjectURL(selectedFile));
      setFormState(prev => ({
        ...prev,
        image: selectedFile,
      }));
    } else {
      setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('location', formState.location);
      formData.append('price', formState.price);
      formData.append('comments', formState.comments);
      formData.append('image', formState.image);
      formData.append('sex', formState.sex);

      // const response = await axios.post('/', formData);
      // console.log(response.data);

      setState(prev => ({
        ...prev,
        ...formState,
      }));

      console.log('Отправляем запрос на сервер с карточкой:', state);

      setStep('first');
    } catch (error) {
      console.log(error.message);
    }
  };

  const thirdStepValidationSchema = yup.object().shape({
    location: yup
      .string()
      .required('Enter a location')
      // .location('Invalid location format')
      .transform(value => value.charAt(0).toUpperCase() + value.slice(1))
      .min(2)
      .max(168)
      .label('Location'),
    price: yup
      .number()
      .required('Enter the price of the pet')
      // .price('Price location format')
      .positive('The price must be greater than 0')
      .test(value => {
        if (value !== undefined) {
          const decimalRegex = /^\d+(\.\d{1,2})?$/;
          return decimalRegex.test(value.toString());
        }
        return true;
      })
      .label('Price'),
    comments: yup
      .string()
      // .comments('Invalid comments format')
      .transform(value => value.charAt(0).toUpperCase() + value.slice(1))
      .min(2)
      .max(120)
      .label('Comments'),
  });

  return (
    <Formik
      initialValues={formState}
      onSubmit={values => {
        setState(prev => ({
          ...prev,
          type: values.sex,
        }));
        handleSubmit();
      }}
      validationSchema={thirdStepValidationSchema}
    >
      {({ values }) => (
        <Form>
          {(type === 'sell' ||
            type === 'lost/found' ||
            type === 'in good hands') && (
            <>
              <p>The Sex</p>
              <div id="my-radio-group">
                {genders.map(gander => (
                  <label key={gander}>
                    <input
                      type="radio"
                      name="sex"
                      value={gander}
                      required
                      checked={values.sex === gander}
                      onChange={handleChange}
                    />
                    {'Female' === <BsGenderFemale /> &&
                      'Male' === <BsGenderMale />}
                    {gander}
                  </label>
                ))}
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

          <div>
            <label htmlFor="image">Load the pet&#39;s image:</label>
            {!file && (
              <Field
                id="image"
                type="file"
                name="image"
                onChange={handleChange}
                required
              />
            )}
            {file && <img src={file} alt="Preview image" />}

            {/* Показати попередній перегляд зображення */}
          </div>

          <label htmlFor="Comments">Comments</label>
          <Field
            id="comments"
            name="comments"
            placeholder="Type breed"
            value={formState.comments}
            onChange={handleChange}
            type="textarea"
          />

          <ButtonPet step={step} setStep={setStep} />
        </Form>
      )}
    </Formik>
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
