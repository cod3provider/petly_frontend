import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { CiLogout } from 'react-icons/ci';
import { theme } from '../../../utils/theme';

import { useDispatch, useSelector } from 'react-redux';
import {
  ImageDef,
  InputP,
  SelectWrap,
  Confirm,
  ConfirmBtn,
  Input,
  InputWrap,
  IconWrap,
  InputText,
  Label,
  CameraIcon,
  FormThumb,
  CrossIcon,
  Wrapper,
  MainWrap,
} from './UserData.styled';
import UserDataItem from '../UserDataItem/UserDataItem';

import {
  getCurrentUser,
  updateCurrentUser,
} from '../../../redux/auth/authOperations';
import { getUser } from '../../../redux/auth/authSelectors.js';

import defaultUserImg from '../../../images/default-user-img.jpg';

const initialState = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const UserData = () => {
  const [user, setUser] = useState(initialState);
  const [avatarUser, setAvatarUser] = useState();
  const [isConfirm, setIsConfirm] = useState(false);
  const dispatch = useDispatch();

  const fileRef = useRef(null);
  const userData = useSelector(getUser);
  // console.log(userData);
  // console.log(avatarUser);

  const { avatarUrl } = userData;

  // const [showModal, setShowModal] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const selectHandler = () => {
    setUser({ ...user });
    setIsConfirm(true);
  };

  useEffect(() => {
    const updateAvatar = () => {
      if (avatarUrl) {
        setAvatarUser({ avatarUrl });
      }
    };
    updateAvatar();
  }, [avatarUrl]);

  // const handleChangeAvatar = event => {
  //   event.preventDefault();
  //   const data = new FormData();
  //   const av = URL.createObjectURL(event.target.files[0]);

  //   data.append('image', event.target.files[0]);
  //   setAvatarUser({ avatar: av });
  //   dispatch(updateCurrentUser(data));
  // };

  const handleChangeFile = event => {
    event.preventDefault();
    setUser({ ...user });
    dispatch(updateCurrentUser(user));
  };

  return (
    <MainWrap>
      <FormThumb onSubmit={handleChangeFile}>
        {avatarUser ? (
          <ImageDef src={avatarUser.avatarUrl} alt="User Avatar" />
        ) : (
          <ImageDef
            src={defaultUserImg}
            alt="User Avatar"
            width="182px"
            height="182px"
            onClick={() => {
              fileRef.current.click();
            }}
          />
        )}

        {!isConfirm ? (
          <InputWrap>
            <Input
              accept="image/png, image/jpeg"
              type="file"
              name="avatar"
              id="input__file"
              ref={fileRef}
              onChange={selectHandler}
            />
            <Label htmlFor="input__file">
              <IconWrap>
                <AiOutlineCamera
                  style={{ marginRight: '11px' }}
                  size="24px"
                  color={theme.baseColors.accentButtonColor}
                />
              </IconWrap>
              <InputText>Edit photo</InputText>
            </Label>
          </InputWrap>
        ) : (
          <SelectWrap>
            <Input
              type="file"
              name="avatar"
              id="input__file"
              ref={fileRef}
              onChange={selectHandler}
            ></Input>
            <Label htmlFor="input__file">
              <IconWrap>
                <CrossIcon />
              </IconWrap>
              <InputText>Change photo</InputText>
            </Label>
            <ConfirmBtn type="submit">
              <IconWrap>
                <Confirm />
              </IconWrap>
              <InputP>Confirm</InputP>
            </ConfirmBtn>
          </SelectWrap>
        )}
      </FormThumb>
      <Wrapper>
        <UserDataItem />
      </Wrapper>
    </MainWrap>
  );
};

export default UserData;
