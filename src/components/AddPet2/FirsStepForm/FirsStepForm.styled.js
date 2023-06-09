import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { Form } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 347px;

  /* flex-wrap: wrap; */
`;

export const CheckboxContainer = styled.div`
  margin: -6px 0;
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  height: 35px;
  margin: 6px 0;
`;

export const CheckBox = styled.input`
  display: none;
`;

export const CheckboxSpan = styled.span`
  font-weight: 500;
  font-size: ${theme.fontSizes.s};
  line-height: 1.36;
  letter-spacing: 0.04em;

  /* color: ${theme.baseColors.accentColor}; */

  padding: 8px 16px;

  background: rgba(140, 200, 253, 0.44);
  border-radius: 40px;

  color: ${props => {
    if (props.state.type === props.categorie) {
      return `${theme.baseColors.buttonTextColor}`;
    }
  }};
  background-color: ${props => {
    if (props.state.type === props.categorie) {
      return `${theme.baseColors.accentColor}`;
    }
  }};

  &:hover,
  &:focus,
  &:checked {
    color: ${theme.baseColors.buttonTextColor};

    background-color: ${theme.baseColors.accentColor};
  }
`;
