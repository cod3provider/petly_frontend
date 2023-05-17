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
} from './UserProfile.styled';

// import photo from '../../../images/avat.jpg';

const UserData = () => {
  return (
    <div>
      <UserTitle>My information:</UserTitle>
      <UserDataWrap>
        <UserImg></UserImg>
        <PhotoBtn>Edit photo</PhotoBtn>
        <Formik>
          <UserForm>
            <UserLabel htmlFor="name">
              <UserDataSpan>Name:</UserDataSpan>
              <UserInput type="text" name="name" />
            </UserLabel>
            <UserLabel>
              <UserDataSpan>Email:</UserDataSpan>

              <UserInput type="email" name="email" />
            </UserLabel>
            <UserLabel>
              <UserDataSpan>Birthday:</UserDataSpan>

              <UserInput type="date" name="birthday" />
            </UserLabel>
            <UserLabel>
              <UserDataSpan>Phone:</UserDataSpan>

              <UserInput type="tel" name="tel" />
            </UserLabel>
            <UserLabel>
              <UserDataSpan>City:</UserDataSpan>

              <UserInput type="text" name="city" />
            </UserLabel>
          </UserForm>
        </Formik>
        <LogOutBtn type="submit">Log Out</LogOutBtn>
      </UserDataWrap>
    </div>
  );
};

export default UserData;
