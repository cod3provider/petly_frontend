import styled from 'styled-components';
import { Form } from 'formik';

import { theme } from '../../../utils/theme';
// import { IoPawOutline } from 'react-icons/io5';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 347px;
`;

export const FormStyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (${theme.breakpoints.mobile.media}) {
    margin: -10px;
  }
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
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

export const DataPickercontainer = styled.div`
  position: relative;
`;
