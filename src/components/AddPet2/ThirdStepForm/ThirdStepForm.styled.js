import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { BsPlusLg } from 'react-icons/bs';
import { BsGenderMale } from 'react-icons/bs';

export const LabelStyle = styled(`label`)`
  display: block;
  font-family: 'Manrope';
  font-weight: 500;
  text-align: left;
  font-size: ${theme.fontSizes.l};
  line-height: 1.35;
  margin-bottom: 4px;
  color: #111111;
`;
export const TextareaStyle = styled('input')`
  width: 100%;
  height: 92px;
  padding: 8px 16px;
  resize: none;
  border: 1px solid #54adff;
  border-radius: 20px;
  ::placeholder {
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
`;
export const WrapperImage = styled.div`
  display: flex;
  justify-content: left;
  text-align: center;
`;
export const LabelImage = styled('label')`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  margin-right: 27px;
  align-items: center;

  color: #111111;
  @media ${theme.breakpoints.tablet.media} {
    font-size: ${theme.fontSizes.x};
  }

  @media ${theme.breakpoints.desktop.media} {
    font-size: ${theme.fontSizes.x};
  }
`;
export const InputImage = styled.input`
  /* position: absolute; */
  opacity: 0;
  /* display: none; */
  width: 112px;
  height: 112px;
  background-color: #cce4fb;
`;

export const IconPlus = styled(BsPlusLg)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: none;
  color: #54adff;
`;
export const ImagePetStyle = styled.img`
  position: absolute;
  object-fit: cover;
  width: 112px;
  height: 112px;
  border-radius: 20px;
  background-position: left;
`;

export const GenderLabel = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  /* align-items: center; */
  letter-spacing: 0.04em;
  margin: 12px;

  color: #888888;
`;

export const InputStyle = styled('input')`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  padding: 10px 16px;
  border-radius: 40px;
  border: 1px solid;
  border-color: ${props =>
    props.error ? 'red' : props.success ? '#54ADFF' : '#54ADFF'};
  background-color: ${theme.baseColors.filterActiveTextColor};
  font-size: ${theme.fontSizes.s};
  cursor: pointer;

  outline: none;

  &:hover,
  &:focus {
    border-color: #ffc107;
  }

  /* &:hover:not(:disabled) {
    background-color: ${theme.baseColors.filterActiveTextColor};
  } */

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: ${theme.fontSizes.m};
  }
`;

export const CheckBoxHidden = styled.input`
  display: none;
`;

export const GenderContainer = styled.div`
  margin: 4px -12px 16px 0px;
  text-align: left;
`;

export const MaleIcon = styled(BsGenderMale)`
  margin-left: 16px;
  transform: rotate(-45deg);
`;
