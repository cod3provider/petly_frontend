import styled from 'styled-components';
// import { theme } from '../../../utils/theme';

// import { ReactComponent as EditIcon } from '../../../icons/edit-2.svg';
// import { ReactComponent as Check } from '../../../icons/check.svg';

export const Span = styled.span`
  min-width: 0px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const CheckIcon = styled.div`
  fill: none;
  width: 24px;
  height: 24px;
`;

export const EditButton = styled.button`
  cursor: pointer;
  position: absolute;
  overflow: visible;
  right: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  background: transparent;
  border: none;
`;

export const Edit = styled.div`
  width: 24px;
  height: 24px;
  fill: #54adff;
`;

export const Input = styled.input`
  //width: calc(60vw);
  width: 190px;
  height: 28px;
  padding: 4px 12px;
  background: transparent;
  border: 1px solid rgb(84, 173, 255);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 255px;
    height: 32px;
  }
`;

export const Wrapper = styled.div`
  //@media screen and (min-width: 768px) {
  //  width: 355px;
  //  margin: 0px;
  //  padding: 0px;
  //}
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemWrap = styled.form`
  &:not(:last-child) {
    //margin-bottom: 12px;
    @media screen and (min-width: 768px) {
      //margin-bottom: 8px;
    }
  }
`;

export const Label = styled.label``;

export const InputWrap = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const DataPickerBox = styled.div`
  position: absolute;
  z-index: 999;
  top: -50%;
  left: 15%;
`;

export const ErrorBox = styled.div`
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.div`
  font-size: 10px;
  line-height: 1.33;
  color: #f43f5e;
`;
export const DataPickerContainer = styled.div`
  position: relative;
`;
