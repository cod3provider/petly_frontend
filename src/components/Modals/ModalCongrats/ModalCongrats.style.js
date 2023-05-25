import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const ModalTitle = styled.h2`
  margin-top: 60px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.01em;

  @media (min-width: 767px) {
    font-size: 28px;
  }
`;

export const ModalText = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.01em;

  @media (min-width: 767px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 256px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.04em;
  background-color: ${theme.baseColors.accentButtonColor};
  color: #fef9f9;
  border: 2px solid #54adff;
  border-radius: 40px;
  margin-bottom: 8px;
  padding: 9px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${theme.baseColors.buttonHoverBgColor};
    color: #fef9f9;
  }
`;