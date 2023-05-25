// import React, { useRef, useState, useEffect } from 'react';

import { useRef, useState, useEffect } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { theme } from '../../../utils/theme';



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
  const [user, setUser] = useState(initialState);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // Варіант Слави
  // const [avatarUser, setAvatarUser] = useState();
  const [isConfirm, setIsConfirm] = useState(false);
  const dispatch = useDispatch();

  const fileRef = useRef(null);
  const userData = useSelector(getUser);

  const { avatarUrl } = userData;
  // Варіант Слави
  // const [showModal, setShowModal] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // Варіант Слави
  // const selectHandler = () => {
  //   setUser({ ...user });
  //   setIsConfirm(true);
  // };


  const handleChangeFile = event => {
    event.preventDefault();
    dispatch(updateCurrentUser(selectedPhoto));
  };
  const selectHandler = event => {
    const file = event.target.files[0];
    setSelectedPhoto(URL.createObjectURL(file));
    setIsConfirm(true);
  };
  // Варіант Слави
  useEffect(() => {
    const updateAvatar = () => {
      if (avatarUrl) {
        setSelectedPhoto({ avatarUrl });
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

  // Варіант Слави
  // const handleChangeFile = event => {
  //   event.preventDefault();
  //   setUser({ ...user });
  //   dispatch(updateCurrentUser(user));
  // };

  return (
    <MainWrap>
      <FormThumb onSubmit={handleChangeFile}>
        {selectedPhoto ? (
          <ImageDef
            src={selectedPhoto || defaultUserImg}
            alt="User Avatar"
            width="182px"
            height="182px"
            onClick={() => {
              fileRef.current.click();
            }}
          />
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
        <UserAvatar/>
        <UserDataItem />
      </Wrapper>
    </MainWrap>
  );
};

export default UserData;
