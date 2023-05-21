import { Formik, Field, Form } from 'formik';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ButtonPet from '../ButtonPet/ButtonPet';

const ThirdStepForm = ({ setStep, state, setState, type, step }) => {
  const [formState, setFormState] = useState({
    location: state.location,
    price: state.price,
    comments: state.comments,
    image: state.image,
    sex: state.sex,
  });
  const [file, setFile] = useState(null); // Значення file початково встановлено як null

  const genders = ['female', 'male'];

  axios.defaults.baseURL = 'https://your-pet-backend-jfrs.onrender.com';

  const handleChange = e => {
    console.log(e.target.value);
    if (e.target.name === 'image') {
      const selectedFile = e.target.files[0];
      // console.log(selectedFile);
      setFile(URL.createObjectURL(selectedFile));
      setFormState(prev => ({
        ...prev,
        image: selectedFile,
      }));
    } else {
      setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
      setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
      console.log(formState);
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('category', state.type);
      formData.append('title', state.titlePet);
      formData.append('name', state.namePet);
      formData.append('birthday', state.birth);
      formData.append('breed', state.breed);
      formData.append('location', formState.location);
      formData.append('price', formState.price);
      formData.append('comment', formState.comments);
      formData.append('noticeImage', formState.image);
      formData.append('sex', formState.sex);

      let postLine;

      if (state.type === 'your pet') {
        postLine = '/pets';
        formData.append('comments', formState.comments);
      } else {
        postLine = '/notices';
        formData.append('comment', formState.comments);
      }

      await axios
        .post(postLine, formData, {
          headers: { 'Content-type': 'multipart/form-data' },
        })
        .then(res => {
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

  return (
    <Formik initialValues={formState} onSubmit={handleSubmit}>
      {() => (
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
                value={formState.image}
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
            required
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
