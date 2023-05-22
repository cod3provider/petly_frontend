import styled from 'styled-components';
// import { theme } from '../../../utils/theme';

export const TextareaStyle = styled('input')`
  width: 100%;
  height: 92px;
  resize: none;
  padding: 8px 0 0 16px;
  border: 1px solid #54adff;
  border-radius: 20px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;

    align-items: center;
    letter-spacing: 0.04em;
    color: #888888;
  }
`;
