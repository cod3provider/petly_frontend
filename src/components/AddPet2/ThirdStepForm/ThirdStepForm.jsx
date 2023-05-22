import { Formik, Field, Form } from 'formik';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as yup from 'yup';
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

import { useNavigate } from 'react-router-dom';

const ThirdStepForm = ({
  setStep,
  state,
  setState,
  type,
  step,
  backLinkHref,
}) => {

  const [formState, setFormState] = useState({
    location: state.location,
    price: state.price,
    comments: state.comments,
    image: state.image,
    sex: state.sex,
  });

  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const genders = ['female', 'male'];

  axios.defaults.baseURL = 'https://your-pet-backend-jfrs.onrender.com';


  const handleChange = e => {
    if (e.target.name === 'image') {
      const selectedFile = e.target.files[0];
      setFile(URL.createObjectURL(selectedFile));
      setFormState(prev => ({
        ...prev,
        image: selectedFile,
      }));
    } else {
      setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
      setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      let postLine;

      if (state.type === 'your pet') {
        postLine = '/pets';
        formData.append('name', state.namePet);
        formData.append('comments', formState.comments);
        formData.append('birthday', state.birth);
        formData.append('breed', state.breed);
        formData.append('petsImage', formState.image);
      } else {
        postLine = '/notices';
        formData.append('comment', formState.comments);
        formData.append('category', state.type);
        formData.append('title', state.titlePet);
        formData.append('name', state.namePet);
        formData.append('birthday', state.birth);
        formData.append('breed', state.breed);
        formData.append('location', formState.location);
        formData.append('price', formState.price || 0);
        formData.append('noticeImage', formState.image);
        formData.append('sex', formState.sex);
      }

      await axios
        .post(postLine, formData, {
          headers: { 'Content-type': 'multipart/form-data' },
        })
        .then(res => {
          setState({});
          navigate(backLinkHref, { replace: true });
          localStorage.setItem('addPetState', JSON.stringify(''));
          localStorage.setItem('addPetStep', JSON.stringify(''));
          console.log('Success' + res.data);
        })
        .catch(err => {
          console.log(err);
        });
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
      onSubmit={
        handleSubmit();
      }}
      validationSchema={thirdStepValidationSchema}
    >
  
      {() => (
        <Form>
          {(type === 'sell' ||
            type === 'lostFound' ||
            type === 'inGoodHands') && (

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

                      checked={formState.sex === gander}

                      onChange={handleChange}
                    />
                    {'female' === <BsGenderFemale /> &&
                      'male' === <BsGenderMale />}
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
  backLinkHref: PropTypes.string.isRequired,
};
