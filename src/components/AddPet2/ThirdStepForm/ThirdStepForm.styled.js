import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { BsPlusLg } from 'react-icons/bs';

export const TextareaStyle = styled('input')`
  width: 100%;
  height: 92px;
  padding: 8px 0 0 16px;
  resize: none;
  border: 1px solid #54adff;
  border-radius: 20px;
  ::placeholder {
    display: flex;
    justify-content: left;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    align-items: start;
    letter-spacing: 0.04em;
    color: #888888;
  }
`;

export const BoxImage = styled.div`
  position: relative;
  width: 112px;
  height: 112px;

  border-radius: 20px;

  @media ${theme.breakpoints.tablet.media} {
    font-size: ${theme.fontSizes.x};
  }

  @media ${theme.breakpoints.desktop.media} {
    font-size: ${theme.fontSizes.x};
  }
`;

export const InputImage = styled.input`
  position: absolute;

  /* display: none; */
  width: 112px;
  height: 112px;
  background: #cce4fb;
`;

export const IconPlus = styled(BsPlusLg)`
  width: 30px;
  height: 30px;
  background-color: none;
  color: #54adff;
`;
