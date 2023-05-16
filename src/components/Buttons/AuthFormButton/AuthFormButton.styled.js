import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const StyledButton = styled('button')`
  display: block;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${theme.baseColors.accentButtonColor};
  border-radius: 40px;
  cursor: pointer;

  :hover:not(:disabled) {
    background-color: ${theme.baseColors.buttonHoverBgColor};
  }
`;

export const ButtonText = styled.span`
  font-size: ${theme.fontSizes.ml};
  color: ${theme.baseColors.buttonTextColor};
`;
