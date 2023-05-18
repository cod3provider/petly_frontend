// import { Formik, Field, Form } from 'formik';
// import { BsGenderFemale } from 'react-icons/bs';
// import { BsGenderMale } from 'react-icons/bs';
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import ButtonPet from '../ButtonPet/ButtonPet';
// const ThirdStepForm = ({ setStep, state, setState, type, step }) => {
//   const [FormState, setFormState] = useState({
//     location: '',
//     price: '',
//     comments: '',
//     image: '',
//     sex: '',
//   });

//   axios.defaults.baseURL =
//     'https://your-pet-backend-jfrs.onrender.com/api-docs';

//   const handleBack = () => {
//     setStep('second');
//   };

//   const handleChange = e => {
//     setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async values => {
//     setState(prev => ({
//       ...prev,
//       ...FormState,
//       type: values.picked,
//     }));

//     try {
//       const response = await axios.post('/', response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.log(error.message);
//     }

//     console.log('Отправляем запрос на сервер с карточкой:', state);

//     setStep('first');
//   };

//   return (
//     <>
//       <Formik initialValues={FormState} onSubmit={handleSubmit}>
//         <Form>
//           {(type === 'sell' ||
//             type === 'lost/found' ||
//             type === 'in good hands') && (
//             <>
//               <p>The Sex</p>
//               <div id="my-radio-group"></div>
//               <div role="group" aria-labelledby="my-radio-group">
//                 <label htmlFor="sex">Female</label>
//                 <Field
//                   id="sex"
//                   name="sex"
//                   styled="none"
//                   type="radio"
//                   value={(FormState.sex = 'Female')}
//                   required
//                 />
//                 <BsGenderFemale />

//                 <label htmlFor="sex">Male</label>
//                 <Field
//                   id="sex"
//                   name="sex"
//                   styled="none"
//                   type="radio"
//                   value={(FormState.sex = 'Male')}
//                   required
//                 />
//                 <BsGenderMale />
//                 <div></div>
//               </div>
//               <label htmlFor="location">Location</label>
//               <Field
//                 id="location"
//                 name="location"
//                 placeholder="Location"
//                 value={FormState.location}
//                 onChange={handleChange}
//                 required
//               />
//             </>
//           )}
//           {type === 'sell' && (
//             <>
//               <label htmlFor="price">Price</label>
//               <Field
//                 id="price"
//                 name="price"
//                 placeholder="Price"
//                 value={FormState.price}
//                 onChange={handleChange}
//                 required
//               />
//             </>
//           )}

//           <label htmlFor="price">Load the pet&#39;s image:</label>
//           <Field
//             id="image"
//             type="file"
//             name="image"
//             value={FormState.image}
//             onChange={handleChange}
//             required
//           />
//           {/* style resize: none; */}
//           <label htmlFor="Comments">Comments</label>
//           <Field
//             id="comments"
//             name="comments"
//             placeholder="Type breed"
//             value={FormState.comments}
//             onChange={handleChange}
//             type="textarea"
//             required
//           />
//           <button type="button" onClick={handleBack}>
//             back
//           </button>
//           <ButtonPet step={step} />
//         </Form>
//       </Formik>
//     </>
//   );
// };

// export default ThirdStepForm;

// ThirdStepForm.propTypes = {
//   setStep: PropTypes.func.isRequired,
//   setState: PropTypes.func.isRequired,
//   state: PropTypes.object.isRequired,
//   type: PropTypes.string.isRequired,
//   step: PropTypes.string.isRequired,
// };
// Варіант 2 працює фото але є помилка
// import { Formik, Field, Form } from 'formik';
// import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import ButtonPet from '../ButtonPet/ButtonPet';

// const ThirdStepForm = ({ setStep, state, setState, type, step }) => {
//   const [formState, setFormState] = useState({
//     location: '',
//     price: '',
//     comments: '',
//     image: '',
//     sex: '',
//     // previewImage: null,
//   });
//   const [file, setFile] = useState();
//   axios.defaults.baseURL =
//     'https://your-pet-backend-jfrs.onrender.com/api-docs';

//   const handleBack = () => {
//     setStep('second');
//   };
//   // Версія працює показує фото
//   const handleChange = e => {
//     console.log(e.target.files);
//     if (e.target.files && e.target.files.length > 0) {
//       setFile(URL.createObjectURL(e.target.files[0]));
//       setFormState(prev => ({
//         ...prev,
//         image: file,
//       }));
//     }
//   };

//  Ще версія не працює
// const handleChange = e => {
//   if (e.target.name === 'image') {
//     const file = e.target.files[0];
//     const previewImage = file ? URL.createObjectURL(file) : '';
//     setFormState(prev => ({
//       ...prev,
//       image: file,
//       previewImage: previewImage,
//     }));
//   } else {
//     setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   }
// };
// Версія до не працювало
// const handleChange = e => {
//   if (e.target.name === 'image') {
//     const file = e.target.files[0];
//     console.log(file);
//     setFormState(prev => ({
//       ...prev,
//       image: file,
//       previewImage: URL.createObjectURL(file), // Створіть URL-адресу зображення для передперегляду
//     }));
//   } else {
//     setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   }
// };
// Варіант 2 працює фото але є помилка
// const handleSubmit = async () => {
//   setState(prev => ({
//     ...prev,
//     ...formState,
//     // type: values.picked,
//   }));

//   const formData = new FormData();
//   formData.append('location', formState.location);
//   formData.append('price', formState.price);
//   formData.append('comments', formState.comments);
//   formData.append('image', formState.image);
//   formData.append('sex', formState.sex);
// formData.append('type', values.picked);

// try {
//   const response = await axios.post('/', formData);
//   console.log(response.data);
// } catch (error) {
//   console.log(error.message);
// }

//   console.log('Отправляем запрос на сервер с карточкой:', state);

//   setStep('first');
// };
//  return (
//     <Formik initialValues={formState} onSubmit={handleSubmit}>
//       <Form>
//         {(type === 'sell'  type === 'lost/found'  type === 'in good hands') && (
//           <>
//             <p>The Sex</p>
//             <div id="my-radio-group">
//               <label htmlFor="sex">Female</label>
//               <Field
//                 id="sex"
//                 name="sex"
//                 type="radio"
//                 value="Female"
//                 required
//               />
//               <BsGenderFemale />

//               <label htmlFor="sex">Male</label>
//               <Field
//                 id="sex"
//                 name="sex"
//                 type="radio"
//                 value="Male"
//                 required
//               />
//               <BsGenderMale />
//             </div>

//             <label htmlFor="location">Location</label>
//             <Field
//               id="location"
//               name="location"
//               placeholder="Location"
//               required
//             />
//           </>
//         )}
// Варіант 2 працює фото але є помилка
//   return (
//     <Formik initialValues={formState} onSubmit={handleSubmit}>
//       <Form>
//         {(type === 'sell' ||
//           type === 'lost/found' ||
//           type === 'in good hands') && (
//           <>
//             <p>The Sex</p>
//             <div id="my-radio-group">
//               <label htmlFor="sex">Female</label>
//               <Field id="sex" name="sex" type="radio" value="Female" required />
//               <BsGenderFemale />

//               <label htmlFor="sex">Male</label>
//               <Field id="sex" name="sex" type="radio" value="Male" required />
//               <BsGenderMale />
//             </div>

//             <label htmlFor="location">Location</label>
//             <Field
//               id="location"
//               name="location"
//               placeholder="Location"
//               required
//             />
//           </>
//         )}
//         {type === 'sell' && (
//           <>
//             <label htmlFor="price">Price</label>
//             <Field
//               id="price"
//               name="price"
//               placeholder="Price"
//               value={formState.price}
//               onChange={handleChange}
//               required
//             />
//           </>
//         )}
//         <div>
//           <label htmlFor="price">Load the pet&#39;s image:</label>
//           <Field
//             id="image"
//             type="file"
//             name="image"
//             value={formState.image}
//             // value={formState.previewImage || ''}
//             onChange={handleChange}
//             required
//           />
//           <img src={file} />
//         </div>

//         {/* {formState.previewImage && (
//           <img src={formState.previewImage} alt="Preview" />
//         )} */}
//         {/* style resize: none; */}
//         <label htmlFor="Comments">Comments</label>
//         <Field
//           id="comments"
//           name="comments"
//           placeholder="Type breed"
//           value={formState.comments}
//           onChange={handleChange}
//           type="textarea"
//           required
//         />
//         <button type="button" onClick={handleBack}>
//           back
//         </button>
//         <ButtonPet step={step} />
//       </Form>
//     </Formik>
//   );
// };

// export default ThirdStepForm;

// ThirdStepForm.propTypes = {
//   setStep: PropTypes.func.isRequired,
//   setState: PropTypes.func.isRequired,
//   state: PropTypes.object.isRequired,
//   type: PropTypes.string.isRequired,
//   step: PropTypes.string.isRequired,
// };

// Варіант 3 працює
import { Formik, Field, Form } from 'formik';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
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
  const [file, setFile] = useState(null); // Значення file початково встановлено як null

  axios.defaults.baseURL =
    'https://your-pet-backend-jfrs.onrender.com/api-docs';

  const handleBack = () => {
    setStep('second');
  };

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
          required
        />
        <button type="button" onClick={handleBack}>
          back
        </button>
        <ButtonPet step={step} />
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
