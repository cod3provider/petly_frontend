import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const StyledButton = styled('button')`
  display: block;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${theme.baseColors.accentButtonColor};
  border-radius: 40px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #419EF1;
  }
`;

export const ButtonText = styled.span`
  font-size: ${theme.fontSizes.ml};
  color: ${theme.baseColors.buttonTextColor};
`;
