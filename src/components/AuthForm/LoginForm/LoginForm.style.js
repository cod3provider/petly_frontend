import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { FiEyeOff, FiEye } from 'react-icons/fi';

export const StyledEyeIcon = styled(FiEye)`
  color: ${theme.baseColors.accentButtonColor}; /* Customize the color */
  font-size: 16px; /* Customize the size */
`;

export const StyledEyeIconOff = styled(FiEyeOff)`
  color: ${theme.baseColors.accentButtonColor}; /* Customize the color */
  font-size: 16px; /* Customize the size */
`;

export const AuthWraper = styled.div`
  max-width: 608px;
  margin: 0 auto;
  background-color: lightgrey;
  border: 2px;
  border-color: black;
  border-radius: 40px;
  padding: 40px 0;

  @media screen and (min-width: 768px) {
    padding: 60px 0;
  }
`;

export const TitleH1 = styled.h2`
  font-weight: 400;
  font-size: ${theme.fontSizes.l};

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.xl};
  }
`;

export const AuthForm = styled('form')`
  width: 280px;
  margin: 0 auto;
  padding: 12px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 0 25px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ButtonIcon = styled.button`
  position: absolute;
  bottom: 7px;
  right: 10px;
  height: 30px;
  border: 0px;
  background-color: ${theme.baseColors.filterActiveTextColor};
`;

export const InputStyle = styled('input')`
  position: relative;
  width: 100%;
  margin-top: 24px;
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

export const LinkWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.xs};

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.s};
  }
`;
