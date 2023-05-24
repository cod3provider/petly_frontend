import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 129px;
  max-height: 40px;
  padding: 5px 16px;
  font-family: Manrope-SemiBold;
  font-size: 16px;
  color: rgb(253, 247, 242);
  background-color: rgb(84, 173, 255);
  border-width: 0px;
  border-color: rgb(84, 173, 255);
  border-style: solid;
  border-radius: 40px;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      290.46deg,
      rgb(65, 158, 241) 0%,
      rgb(155, 208, 255) 107.89%
    );
    border-radius: 40px;
    opacity: 0;
    z-index: -1;
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover::before,
    &:focus::before {
      opacity: 1;
    }

    & svg {
      stroke: #fff;
    }
  }
`;

export const PetsWrap = styled.div`
  //width: 280px;
  width: 100%;
  //margin: 0 auto;

  @media ${theme.breakpoints.desktop.media} {
    //width: 700px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: baseline;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 10px;
  //margin: 40px 0px 24px;

  //@media screen and (min-width: 768px) {
  //  margin: 40px 0px 20px;
  //}
  //
  //@media screen and (min-width: 1280px) {
  //  margin: 60px 0px 24px;
  //}
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const PetWrapper = styled.div`
  width: 280px;
  margin: 0 auto;
  
  @media ${theme.breakpoints.mobile.media} {
    //margin: 0 auto;
  }
  
  @media ${theme.breakpoints.tablet.media} {
    //margin: 0 auto;
    width: 100%;
  }

  @media ${theme.breakpoints.desktop.media} {
    //width: 395px;
    flex-grow: 1;
  }
`;