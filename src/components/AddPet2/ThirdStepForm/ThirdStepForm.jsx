import { Formik, Field, Form } from 'formik';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ButtonPet from '../ButtonPet/ButtonPet';
import {
  LabelStyle,
  InputStyle,
} from '../SecondStepForm/SecondStepForm.styled';
import {
  TextareaStyle,
  BoxImage,
  IconPlus,
  InputImage,
} from './ThirdStepForm.styled';

const ThirdStepForm = ({ setStep, state, setState, type, step }) => {
  const [formState, setFormState] = useState({
    location: state.location,
    price: state.price,
    comments: state.comments,
    image: state.image,
    sex: state.sex,
  });
  const [file, setFile] = useState(null); // Значення file початково встановлено як null

  axios.defaults.baseURL =
    'https://your-pet-backend-jfrs.onrender.com/api-docs';

  const handleChange = e => {
    console.log(e.target.name);
    if (e.target.name === 'image') {
      const selectedFile = e.target.files[0];
      // console.log(selectedFile);
      setFile(URL.createObjectURL(selectedFile));
      setFormState(prev => ({
        ...prev,
        image: selectedFile,
      }));
    } else {
      setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
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

  return (
    <Formik initialValues={formState} onSubmit={handleSubmit}>
      <Form>
        {(type === 'sell' ||
          type === 'lost/found' ||
          type === 'in good hands') && (
          <>
            <p>The Sex</p>
            <div id="my-radio-group">
              <label htmlFor="sex">Female</label>
              <Field
                id="sex"
                name="sex"
                type="radio"
                value={(formState.sex = 'Female')}
                required
              />
              <BsGenderFemale />

              <label htmlFor="sex">Male</label>
              <Field
                id="sex"
                name="sex"
                type="radio"
                value={(formState.sex = 'Male')}
                required
              />
              <BsGenderMale />
            </div>

            <LabelStyle htmlFor="location">Location</LabelStyle>
            <InputStyle
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
            <LabelStyle htmlFor="price">Price</LabelStyle>
            <InputStyle
              id="price"
              name="price"
              placeholder="Price"
              value={formState.price}
              onChange={handleChange}
              required
            />
          </>
        )}

        <label htmlFor="image">Load the pet&#39;s image:</label>
        <BoxImage>
          {/* {!file && (
            <Field
              id="image"
              type="file"
              name="image"
              onChange={handleChange}
              value={formState.image}
              required
            />
            
          )} */}
          {/* {file && <img src={file} alt="Preview image" />} */}

          {file ? (
            <img src={file} alt="Preview image" />
          ) : (
            <>
              <InputImage
                id="image"
                type="file"
                name="image"
                onChange={handleChange}
                value={formState.image}
                required
              />
              <IconPlus />
            </>
          )}
          {/* Показати попередній перегляд зображення */}
        </BoxImage>

        <LabelStyle htmlFor="Comments">Comments</LabelStyle>
        <TextareaStyle
          id="comments"
          name="comments"
          placeholder="Type breed"
          value={formState.comments}
          onChange={handleChange}
          type="textarea"
          required
        />

        <ButtonPet step={step} setStep={setStep} />
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
  step: PropTypes.string.isRequired,
};
