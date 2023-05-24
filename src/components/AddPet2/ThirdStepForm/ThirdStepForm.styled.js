import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { Form } from 'formik';

import { BsPlusLg } from 'react-icons/bs';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 347px;
`;

export const FormStyledBox = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */

  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    flex-direction: ${({ type }) => {
      if (type !== 'your pet') {
        return 'row';
      }
    }};
  }
`;

export const GenderBox = styled.div`
  @media (${theme.breakpoints.mobile.media}) {
    margin-bottom: 16px;
  }
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    margin-bottom: ${({ type }) => {
      if (type !== 'your pet') {
        return '48px';
      } else {
        return '16px';
      }
    }};
  }
`;

export const StyledFileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    width: ${({ type }) => {
      if (type !== 'your pet') {
        return '312px';
      } else {
        return '245px';
      }
    }};
  }
`;
export const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (${theme.breakpoints.mobile.media}) {
    margin: -10px;
  }
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    /* flex-direction: ; */
    margin: -12px;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  @media (${theme.breakpoints.mobile.media}) {
    margin: 10px;
  }
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    margin: 12px;
  }
`;

export const LabelStyle = styled(`label`)`
  display: block;
  font-weight: 500;
  text-align: left;
  line-height: 1.35;
  color: #111111;

  @media (${theme.breakpoints.mobile.media}) {
    font-size: ${theme.fontSizes.s};
    margin-bottom: 4px;
  }
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    font-size: ${theme.fontSizes.ml};
    margin-bottom: 8px;
  }
`;
export const TextareaStyle = styled('textarea')`
  width: 100%;
  height: 92px;
  padding: 8px 16px;
  resize: none;
  border: 1px solid #54adff;
  border-radius: 20px;
  color: #888888;
  outline: none;

  &:hover,
  &:focus {
    border-color: #ffc107;
  }

  &::placeholder {
    display: flex;
    align-items: start;
    justify-content: left;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    align-items: start;
    letter-spacing: 0.04em;
    color: #888888;
  }
`;

export const BoxImage = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  background-color: #cce4fb;
  border-radius: 20px;
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    border-radius: 40px;
    width: 182px;
    height: 182px;
  }
`;
export const WrapperImage = styled.div`
  display: flex;
  justify-content: left;
  text-align: center;

  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    flex-direction: ${({ type }) => {
      if (type !== 'your pet') {
        return 'column';
      }
      return 'row';
    }};
  }
`;
export const LabelImage = styled('label')`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  margin-right: 16px;
  align-items: center;

  color: #111111;
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    font-size: ${theme.fontSizes.ml};
    margin-bottom: 8px;
  }
`;
export const InputImage = styled.input`
  opacity: 0;
  width: 112px;
  height: 112px;
  background-color: #cce4fb;
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    width: 182px;
    height: 182px;
  }
`;

export const IconPlus = styled(BsPlusLg)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: none;
  color: #54adff;

  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    width: 48px;
    height: 48px;
    top: 67px;
    left: 67px;
  }
`;
export const ImagePetStyle = styled.img`
  position: absolute;
  object-fit: cover;
  width: 112px;
  height: 112px;
  border-radius: 20px;
  background-position: left;
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    width: 182px;
    height: 182px;
  }
`;

export const InputStyle = styled('input')`
  position: relative;
  width: 100%;

  color: #888888;

  padding: 10px 16px;
  border-radius: 40px;

  border: 1px solid;
  border-color: ${props =>
    props.error ? 'red' : props.success ? '#54ADFF' : '#54ADFF'};
  background-color: ${theme.baseColors.filterActiveTextColor};
  line-height: 1.5;

  cursor: pointer;

  outline: none;

  &:hover,
  &:focus {
    border-color: #ffc107;
  }
  @media (${theme.breakpoints.mobile.media}) {
    font-size: ${theme.fontSizes.s};
    margin-bottom: 4px;
  }
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 8px;
  }
`;

export const CheckBoxHidden = styled.input`
  display: none;
`;

export const GenderLabel = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  /* align-items: center; */
  letter-spacing: 0.04em;
  margin: 12px;

  color: #888888;

  color: ${props => {
    if (props.state.sex === props.gender) {
      switch (props.gender) {
        case 'female':
          return '#F43F5E';

        case 'male':
          return '#00C3AD';

        default:
          return '#888888';
      }
    }
  }};
`;

export const GenderContainer = styled.div`
  margin-left: 7px;
  text-align: left;
`;

export const MaleIcon = styled(BsGenderMale)`
  margin-left: 16px;
  transform: rotate(-45deg);
  /* color: ${theme.baseColors.accentButtonColor}; */

  color: ${props => {
    switch (props.state.sex) {
      case 'female':
        return '#888888';

      case 'male':
        return `${theme.baseColors.accentButtonColor}`;

      default:
        return `${theme.baseColors.accentButtonColor}`;
    }
  }};
`;

export const FemaleIcon = styled(BsGenderFemale)`
  /* margin-left: 16px; */
  /* transform: rotate(-45deg); */
  /* color: ${theme.baseColors.accentButtonColor}; */

  color: ${props => {
    switch (props.state.sex) {
      case 'female':
        return '#F43F5E';

      case 'male':
        return '#888888';

      default:
        return '#F43F5E';
    }
  }};
`;
