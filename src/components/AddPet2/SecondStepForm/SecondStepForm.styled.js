import styled from 'styled-components';
import { theme } from '../../../utils/theme';
// import { IoPawOutline } from 'react-icons/io5';

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
export const InputStyle = styled('input')`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  padding: 10px 16px;
  border-radius: 40px;
  border-color: ${props =>
    props.error ? 'red' : props.success ? '#54ADFF' : '#54ADFF'};
  background-color: ${theme.baseColors.filterActiveTextColor};
  font-size: ${theme.fontSizes.s};
  cursor: pointer;

  :hover:not(:disabled) {
    background-color: ${theme.baseColors.filterActiveTextColor};
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: ${theme.fontSizes.m};
  }
`;
