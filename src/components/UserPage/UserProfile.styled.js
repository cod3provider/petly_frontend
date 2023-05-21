import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const UserTitle = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: ${theme.fontSizes.ml};
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${theme.baseColors.titleColor};
  margin-bottom: 18px;
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
  border-radius: 40px;
  margin-bottom: 14px;
  background-size: cover;
  background-image: url('https://res.cloudinary.com/dqejymgnk/image/upload/v1684344303/avatar/Group_1000002112_eyrlkv.png');
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url('https://res.cloudinary.com/dqejymgnk/image/upload/v1684344303/avatar/Group_1000002112_2x_i1bd8a.png');
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
    background-image: url('https://res.cloudinary.com/dqejymgnk/image/upload/v1684344303/avatar/Group_1000002112_3x_glttrh.png');
  }
  @media ${theme.breakpoints.tablet.media} {
    width: ${theme.breakpoints.tablet.width};
  }
  @media ${theme.breakpoints.desktop.media} {
    padding: 0 15px;
    width: ${theme.breakpoints.desktop.width};
  }
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
  padding: 4px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 22px;
  background-color: ${theme.baseColors.buttonBgTransparent};
   &:focus{
 outline: none; 
`;

export const UserForm = styled.form`
  display: block;
`;

export const UserLabel = styled.label`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 14px;
`;
export const UserDataSpan = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: ${theme.baseColors.textColor};
`;
export const UserInput = styled.input`
  align-items: center;
  min-width: 190px;
  padding: 4px 12px;
  border: 1px solid #54adff;
  border-radius: 20px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${theme.baseColors.textColor};
`;
export const EditBtn = styled.button`
 display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  padding: 2px;
  position: absolute;
  top: 2px;
  right: 12px;
  background-color: ${theme.baseColors.buttonBgTransparent};
  &:focus{
 outline: none; 
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
  padding: 4px;
  background-color: ${theme.baseColors.buttonBgTransparent};
  &:focus{
 outline: none; 
`;
export const PetsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const AddMyPetBtn = styled.button`
  background: #54adff;
  border-radius: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.37;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #fef9f9;
  &:focus{
 outline: none; 
`;

export const UserPetWrap = styled.div`
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const PetImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 240px;
  height: 240px;
  background-color: #e5e1e1;
  border-radius: 20px;
  margin-bottom: 20px;
  border-style: none;
`;
export const PetCardText = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #000000;
`;
export const PetText = styled.p`
  position: relative;
  min-width: 248px;
  padding: 2px 20px;
  text-align: left;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #000000;
  margin-bottom: 12px;
`;
export const DeletePet = styled.button`
  padding: 4px;
  width: 24px;
  height: 24px;
 display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 2px;
  right: 12px;
  background-color: ${theme.baseColors.buttonBgTransparent};
   &:focus{
 outline: none; 
`;
