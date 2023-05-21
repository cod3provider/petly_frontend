import { AiOutlineCamera } from 'react-icons/ai';
import { CiLogout } from 'react-icons/ci';
import { BiPencil } from 'react-icons/bi';
// import PropTypes from 'prop-types';
import { Formik } from 'formik';
// ErrorMessage;
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { theme } from '../../utils/theme';
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

import { logout } from '../../redux/auth/authOperations';
// import photo from '../../../images/avat.jpg';

const initialState = {
  name: 'asd',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

import { getUserData } from '../../redux/userData/userDataSelectors';

const UserData = () => {
  const [user, setUser] = useState({ ...initialState });
  const [avatar, setAvatar] = useState();

  const userData = useSelector(getUserData);

  const onLogout = () => {
    localStorage.removeItem('persist:auth');
    dispatch(logout());
  };

  const { name, email, birthday, phone, city } = user;

  // console.log(name);
  console.log(userData);

  const handleChange = () => {};

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
              <UserInput
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Book title"
              />
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
