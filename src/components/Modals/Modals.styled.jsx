import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const ModalTitle = styled.h2`
margin-top: 60px;
margin-bottom: 40px;
font-weight: 700;
font-size: 24px;
letter-spacing: -0.01em;

@media (min-width: 767px) {
  font-size: 28px;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
gap:9;
    @media ${theme.breakpoints.tablet.media} {
        align-items: center;


  @media (min-width: 767px) {
    flex-direction: row;
  }

  @media (min-width: 767px) {
    width: 129px;
    margin-right: 17px;

    :last-child {
      margin-right: 0;
    }
  }
`;
export const Button = styled.button`
width:256px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  border: 2px solid #54adff;
  border-radius: 40px;
  margin-bottom: 8px;
  padding:9px;
  display: flex;
  align-items: center;
  justify-content:center;

  &:hover {
    background-color: #54adff;
    color: #fef9f9;
  }
    @media ${theme.breakpoints.tablet.media} {
 
`;
// buttonBgTransparent;
