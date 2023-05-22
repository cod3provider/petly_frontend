import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineCamera } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { CiLogout } from 'react-icons/ci';
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

import { logout, getCurrentUser } from '../../redux/auth/authOperations';
import { getIsLoggedIn, getUser } from '../../redux/auth/authSelectors.js';
import { theme } from '../../utils/theme';

const initialState = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const UserData = () => {
  const dispatch = useDispatch();
  const [userProf, setUserProf] = useState(initialState);
  const [avatar, setAvatar] = useState();

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = useSelector(getIsLoggedIn);
  const userInfo = useSelector(getUser);

  useEffect(() => {
    const getUserProfile = async () => {
      if (isLoggedIn) {
        setIsLoading(true);
        await dispatch(getCurrentUser());
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    setUserProf(userInfo);
  }, [userInfo]);

  console.log(userProf);

  const onLogout = () => {
    localStorage.removeItem('persist:auth');
    dispatch(logout());
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserProf(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log('here');
  };

  return (
    <div>
      <UserTitle>My information:</UserTitle>
      <UserDataWrap>
        <UserImg></UserImg>
        <PhotoBtn>
          <AiOutlineCamera
            style={{ marginRight: '11px' }}
            size="24px"
            color={theme.baseColors.accentButtonColor}
          />
          Edit photo
        </PhotoBtn>
        <Formik
          initialValues={{
            picked: 'user profile',
          }}
        >
          <UserForm>
            <UserLabel htmlFor="name">
              <UserDataSpan>Name:</UserDataSpan>
              <UserInput
                type="text"
                name="name"
                value={userProf.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              <EditBtn>
                <BiPencil
                  color={theme.baseColors.accentButtonColor}
                  onClick={handleSubmit}
                />
              </EditBtn>
            </UserLabel>
            <UserLabel>
              <UserDataSpan>Email:</UserDataSpan>

              <UserInput
                type="email"
                name="email"
                value={userProf.email}
                onChange={handleChange}
                placeholder="Your email"
              />
              <EditBtn>
                <BiPencil
                  color={theme.baseColors.accentButtonColor}
                  onClick={handleSubmit}
                />
              </EditBtn>
            </UserLabel>
            <UserLabel>
              <UserDataSpan>Birthday:</UserDataSpan>

              <UserInput
                type="text"
                name="birthday"
                value={userProf.birthday.slice(0, 10)}
                onChange={handleChange}
                placeholder="Your birthday"
              />
              <EditBtn>
                <BiPencil
                  color={theme.baseColors.accentButtonColor}
                  onClick={handleSubmit}
                />
              </EditBtn>
            </UserLabel>
            <UserLabel>
              <UserDataSpan>Phone:</UserDataSpan>

              <UserInput
                type="phone"
                name="phone"
                value={userProf.phone}
                onChange={handleChange}
                placeholder="Your phone"
              />
              <EditBtn>
                <BiPencil
                  color={theme.baseColors.accentButtonColor}
                  onClick={handleSubmit}
                />
              </EditBtn>
            </UserLabel>
            <UserLabel>
              <UserDataSpan>City:</UserDataSpan>

              <UserInput
                type="text"
                name="city"
                value={userProf.city}
                onChange={handleChange}
                placeholder="Your city"
              />
              <EditBtn>
                <BiPencil
                  color={theme.baseColors.accentButtonColor}
                  onClick={handleSubmit}
                />
              </EditBtn>
            </UserLabel>
            <LogOutBtn type="submit" onClick={onLogout}>
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
