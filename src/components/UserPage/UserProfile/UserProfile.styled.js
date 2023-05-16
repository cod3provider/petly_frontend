import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const UserTitle = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: ${theme.fontSizes.ml};
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${theme.baseColors.titleColor};
`;
export const UserDataWrap = styled.div`
  padding: 20px 8px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  margin-bottom: 40px;
`;
export const UserImg = styled('img')`
  display: block;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  background: #555555;
  border-radius: 40px;
  margin-bottom: 14px;
`;
export const PhotoBtn = styled.button`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 22px;
`;

export const UserForm = styled.form`
  display: block;
`;

export const UserLabel = styled.label`
  display: flex;
  justify-content: space-beetwen;
  align-items: start;
  margin-bottom: 14px;
`;
export const UserDataSpan = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;
`;
export const UserInput = styled.input`
  margin-left: auto;
  align-items: center;
  width: 190px;
  padding: 4px 12px;
  border: 1px solid #54adff;
  border-radius: 20px;
`;

export const LogOutBtn = styled.button`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #888888;
`;
// export const PetsWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// export const AddMyPetBtn = styled.button`
//   background: #54adff;
//   border-radius: 40px;
//   font-family: 'Manrope';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height */

//   display: flex;
//   align-items: center;
//   letter-spacing: 0.04em;
//   color: #fef9f9;
// `;

// export const UserPetWrap = styled.div`
//   background: #ffffff;
//   box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
//   border-radius: 20px;
// `;
