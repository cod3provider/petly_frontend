import { useMedia } from 'react-use';
import { theme } from '../../../utils/theme';
import { Formik } from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ButtonPet from '../ButtonPet/ButtonPet';
import { useNavigate } from 'react-router-dom';
import {
  GenderLabel,
  LabelStyle,
  InputStyle,
  CheckBoxHidden,
  GenderContainer,
  TextareaStyle,
  BoxImage,
  IconPlus,
  InputImage,
  ImagePetStyle,
  WrapperImage,
  LabelImage,
  MaleIcon,
  FemaleIcon,
  FormStyledBox,
  FormContainer,
  InputBox,
  StyledFileBox,
  StyledBox,
  GenderBox,
} from './ThirdStepForm.styled';

const ThirdStepForm = ({
  setStep,
  state,
  setState,
  type,
  step,
  backLinkHref,
}) => {
  const [formState, setFormState] = useState({
    location: state.location || '',
    price: state.price || '',
    comments: state.comments || '',
    image: state.image || '',
    sex: state.sex || '',
  });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const isMobile = useMedia(theme.breakpoints.mobile.media);
  const isTablet = useMedia(theme.breakpoints.tablet.media);
  const isDesktop = useMedia(theme.breakpoints.desktop.media);

  const genders = ['female', 'male'];

  const genderTitile = gender => {
    switch (gender) {
      case 'female':
        return 'Female';

      case 'male':
        return 'Male';
    }
  };

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
        formData.append('title', state.titlePet || ' ');
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

  return (
    <Formik initialValues={formState} onSubmit={handleSubmit}>
      {() => (
        <FormContainer>
          <FormStyledBox type={state.type}>
            <StyledFileBox>
              {(type === 'sell' ||
                type === 'lostFound' ||
                type === 'inGoodHands') && (
                <GenderBox type={state.type}>
                  <LabelStyle>The Sex</LabelStyle>
                  <GenderContainer id="my-radio-group">
                    {genders.map(gender => (
                      <label key={gender}>
                        <CheckBoxHidden
                          type="radio"
                          name="sex"
                          value={gender}
                          required
                          checked={formState.sex === gender}
                          onChange={handleChange}
                        />
                        {gender === 'female' ? (
                          <FemaleIcon state={formState} />
                        ) : (
                          <MaleIcon state={formState} />
                        )}
                        <GenderLabel gender={gender} state={formState}>
                          {genderTitile(gender)}
                        </GenderLabel>
                      </label>
                    ))}
                  </GenderContainer>
                </GenderBox>
              )}

              <WrapperImage type={state.type}>
                {isMobile && <LabelImage htmlFor="image">Add photo</LabelImage>}

                {isTablet && (
                  <LabelImage htmlFor="image">
                    Load the pet&#39;s image:
                  </LabelImage>
                )}
                {isDesktop && (
                  <LabelImage htmlFor="image">
                    Load the pet&#39;s image:
                  </LabelImage>
                )}
                <BoxImage>
                  {file ? (
                    <ImagePetStyle src={file} alt="Preview image" />
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
                </BoxImage>
              </WrapperImage>
            </StyledFileBox>

            <StyledBox>
              <InputBox>
                {type !== 'your pet' && (
                  <>
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
              </InputBox>

              <InputBox>
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
              </InputBox>

              <InputBox>
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
              </InputBox>
            </StyledBox>
          </FormStyledBox>

          <ButtonPet step={step} setStep={setStep} />
        </FormContainer>
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
  backLinkHref: PropTypes.object.isRequired,
};
