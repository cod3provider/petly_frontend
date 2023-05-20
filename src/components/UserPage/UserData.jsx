import { Formik } from 'formik';
// ErrorMessage;
// import { useSelector, useDispatch } from 'react-redux';
// import React, { useState } from 'react';
import {
  UserTitle,
  UserDataWrap,
  UserForm,
  UserImg,
  UserLabel,
  UserDataSpan,
  UserInput,
  PhotoBtn,
  LogOutBtn,
  EditBtn,
} from './UserProfile.styled';
import { theme } from '../../utils/theme';

import { AiOutlineCamera } from 'react-icons/ai';

import { CiLogout } from 'react-icons/ci';
import { BiPencil } from 'react-icons/bi';
// import photo from '../../../images/avat.jpg';

const UserData = () => {
  return (
    <div>
      <UserTitle>My information:</UserTitle>
      <UserDataWrap>
        <UserImg></UserImg>
        <PhotoBtn>
          <AiOutlineCamera
            style={{
              marginRight: '11px',
            }}
            size="24px"
            color={theme.baseColors.accentButtonColor}
          />
          Edit photo
        </PhotoBtn>
        <Formik>
          <UserForm>
            <UserLabel htmlFor="name">
              <UserDataSpan>Name:</UserDataSpan>
              <UserInput type="text" name="name" />
              <EditBtn>
                <BiPencil color={theme.baseColors.accentButtonColor} />
              </EditBtn>
            </UserLabel>
            <UserLabel>
              <UserDataSpan>Email:</UserDataSpan>

              <UserInput type="email" name="email" />
              <EditBtn>
                <BiPencil color={theme.baseColors.accentButtonColor} />
              </EditBtn>
            </UserLabel>
            <UserLabel>
              <UserDataSpan>Birthday:</UserDataSpan>

              <UserInput type="date" name="birthday" />
              {/* <EditBtn>
                <BiPencil color={theme.baseColors.accentButtonColor} />
              </EditBtn> */}
            </UserLabel>
            <UserLabel>
              <UserDataSpan>Phone:</UserDataSpan>

              <UserInput type="tel" name="tel" />
              <EditBtn>
                <BiPencil color={theme.baseColors.accentButtonColor} />
              </EditBtn>
            </UserLabel>
            <UserLabel>
              <UserDataSpan>City:</UserDataSpan>

              <UserInput type="text" name="city" />
              <EditBtn>
                <BiPencil color={theme.baseColors.accentButtonColor} />
              </EditBtn>
            </UserLabel>
            <LogOutBtn type="submit">
              <CiLogout
                style={{
                  marginRight: '11px',
                }}
                size="24px"
                color={theme.baseColors.accentButtonColor}
              />
              Log Out
            </LogOutBtn>
          </UserForm>
        </Formik>
      </UserDataWrap>
    </div>
  );
};

export default UserData;
