import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const InputStyle = styled('input')`
  position: relative;
  width: 100%;
  margin: 12px;
  padding: 10px 16px;
  border-radius: 40px;
  border-color: ${theme.baseColors.accentColor};
  font-size: ${theme.fontSizes.s};
  cursor: pointer;

  :hover:not(:disabled) {
    background-color: ${theme.baseColors.buttonHoverBgColor};
  }
`;

export const LinkWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.xs};
`;
