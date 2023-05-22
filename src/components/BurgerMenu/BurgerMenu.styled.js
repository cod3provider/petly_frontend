import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { theme } from '../../utils/theme.jsx';

export const BurgerWrapper = styled.div`
  position: relative;
`;
export const BurgerIcons = styled(AiOutlineMenu)`
  width: 24px;
  height: 24px;
  color: ${theme.baseColors.accentYellow};
  cursor: pointer;
`;
