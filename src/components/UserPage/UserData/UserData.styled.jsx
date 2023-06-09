import styled from 'styled-components';
// import { theme } from '../../../utils/theme';

export const MainWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 71px;
  }

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const Confirm = styled.div`
  fill: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 25px;
  }
`;

export const ConfirmBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const ErrorWrap = styled.div`
  position: absolute;
  top: -12px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1.33;
  color: #f43f5e;
`;

export const CrossIcon = styled.div`
  fill: none;
  //   background-color: #bf342a;
  width: 24px;
  height: 24px;
  stroke: #bf342a;
`;

export const FormThumb = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CheckWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageDef = styled.img`
  margin-bottom: 14px;
  width: 182px;
  height: 182px;
  border-radius: 40px;
  overflow: hidden;
  object-fit: cover;
`;

export const UserImage = styled.img`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  margin-bottom: 15px;
  object-fit: cover;
`;

export const Icon = styled.img`
  color: #54adff;
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const Input = styled.input`
  opacity: 0;
  /* visibility: hidden; */
  position: absolute;
`;

export const InputWrap = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  /* align-items: center; */
  text-align: center;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 25px;
  }
`;

export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
  text-align: center;
  margin-bottom: 22px;
`;

export const InputText = styled.span`
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: #111111;
`;

export const InputP = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: #111111;
  font-weight: 500;
`;

export const IconWrap = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CameraIcon = styled.div`
  background-color: #bf342a;

  width: 24px;
  height: 24px;
  background-color: blue;
`;

export const Wrapper = styled.div``;
