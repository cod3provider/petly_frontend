// import React, { useRef, useState, useEffect } from 'react';


// import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  MainWrap,
} from './UserData.styled';
import UserDataItem from '../UserDataItem/UserDataItem';
import UserAvatar from './UserAvatar';

// import { updateCurrentUser } from '../../../redux/auth/authOperations';
// import { getUser } from '../../../redux/auth/authSelectors.js';


// const initialState = {
//   name: '',
//   email: '',
//   birthday: '',
//   phone: '',
//   city: '',
// };

const UserData = () => {


  // const [showModal, setShowModal] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);





  // const handleChangeAvatar = event => {
  //   event.preventDefault();
  //   const data = new FormData();
  //   const av = URL.createObjectURL(event.target.files[0]);

  //   data.append('image', event.target.files[0]);
  //   setAvatarUser({ avatar: av });
  //   dispatch(updateCurrentUser(data));
  // };



  return (
    <MainWrap>
      <Wrapper>
        <UserAvatar/>
        <UserDataItem />
      </Wrapper>
    </MainWrap>
  );
};

export default UserData;
