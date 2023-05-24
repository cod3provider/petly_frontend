import styled from 'styled-components';
// import { theme } from '../../../utils/theme';

export const OutBtn = styled.button`
  padding: 4px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const OutWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }
`;

export const OutText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: #888888;
  display: flex;
  align-items: center;
  justify-content: start;
`;
