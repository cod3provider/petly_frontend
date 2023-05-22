import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { BiPencil } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';

import { getUser, getIsLoggedIn } from '../../../redux/auth/authSelectors.js';

// import { selectUser, selectIsRegistered } from 'redux/auth/auth-selector';
import { updateCurrentUser } from '../../../redux/auth/authOperations';
import {
  EditButton,
  Input,
  ItemWrap,
  Wrapper,
  Label,
  InputWrap,
  Span,
} from './UserDataItem.styled';

const initialState = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const UserDataItem = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const { name, email, phone, birthday, city } = user;
  const isLogin = useSelector(getIsLoggedIn);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState(initialState);
  const id = useMemo(() => nanoid(), []);

  console.log(data);

  const onEditBtn = () => {
    if (isEdit) {
      setIsEdit(false);
      return;
    }
    setIsEdit(true);
  };

  const handleNameSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userName = event.target.name.value;
    const data = { name: userName };
    console.log(data);
    dispatch(updateCurrentUser(data));
  };

  const handleEmailSubmit = event => {
    event.preventDefault();
    // const form = event.target;
    const userEmail = email.value;

    dispatch(updateCurrentUser({ email: userEmail }));
  };

  const handleBirthdaySubmit = event => {
    event.preventDefault();
    // const form = event.target;
    const userBirthday = birthday.value;

    dispatch(updateCurrentUser({ birthday: userBirthday }));
  };

  const handlePhoneSubmit = event => {
    event.preventDefault();
    // const form = event.target;
    const userPhone = phone.value;

    dispatch(updateCurrentUser({ phone: userPhone }));
  };

  const handleCitySubmit = event => {
    event.preventDefault();
    // const form = event.target;
    const userCity = city.value;

    dispatch(updateCurrentUser({ city: userCity }));
  };

  return (
    <Wrapper>
      <ItemWrap onSubmit={handleNameSubmit}>
        <InputWrap>
          <Span>Name: </Span>
          <Label htmlFor={id}></Label>
          {!isEdit && (
            <>
              <EditButton type="button" onClick={onEditBtn}>
                <BiPencil />
              </EditButton>
              <Input readOnly defaultValue={name} />
            </>
          )}
          {isEdit && (
            <>
              <EditButton type="submit" onClick={onEditBtn}>
                <MdDone />
              </EditButton>
              <Input
                type="text"
                defaultValue={name}
                name="name"
                id={id}
                pattern="[A-Za-z]{1,32}"
              />
            </>
          )}
        </InputWrap>
      </ItemWrap>

      <ItemWrap onSubmit={handleEmailSubmit}>
        <InputWrap>
          <Span>Email: </Span>
          <Label htmlFor={id}></Label>
          {!isEdit && (
            <>
              <EditButton type="button" onClick={onEditBtn}>
                <BiPencil />
              </EditButton>{' '}
              <Input readOnly defaultValue={email} />
            </>
          )}
          {isEdit && (
            <>
              <EditButton type="submit" onClick={onEditBtn}>
                <MdDone />
              </EditButton>
              <Input
                type="email"
                defaultValue={email}
                name="email"
                id={id}
                pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
              />
            </>
          )}
        </InputWrap>
      </ItemWrap>

      <ItemWrap onSubmit={handleBirthdaySubmit}>
        <InputWrap>
          <Span>Birthday: </Span>
          <Label htmlFor={id}></Label>
          {!isEdit && (
            <>
              <EditButton type="button" onClick={onEditBtn}>
                <BiPencil />
              </EditButton>
              <Input readOnly defaultValue={birthday} />
            </>
          )}
          {isEdit && (
            <>
              <EditButton type="submit" onClick={onEditBtn}>
                <MdDone />
              </EditButton>
              <Input
                type="text"
                name="birthday"
                id={id}
                defaultValue={birthday}
                placeholder="DD.MM.YYYY"
                dateFormat="dd.MM.yyyy"
                pattern="(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)"
              />
            </>
          )}
        </InputWrap>
      </ItemWrap>
      <ItemWrap onSubmit={handlePhoneSubmit}>
        <InputWrap>
          <Span>Phone: </Span>
          <Label htmlFor={id}></Label>
          {!isEdit && (
            <>
              <EditButton type="button" onClick={onEditBtn}>
                <BiPencil />
              </EditButton>
              <Input readOnly defaultValue={phone} />
            </>
          )}
          {isEdit && (
            <>
              <EditButton type="submit" onClick={onEditBtn}>
                <MdDone />
              </EditButton>
              <Input
                type="phone"
                name="phone"
                id={id}
                defaultValue={phone}
                minlength="12"
                maxlength="12"
                placeholder="+380XXXXXXXXX"
              />
            </>
          )}
        </InputWrap>
      </ItemWrap>

      <ItemWrap onSubmit={handleCitySubmit}>
        <InputWrap>
          <Span>City:</Span>
          <Label htmlFor={id}></Label>
          {!isEdit && (
            <>
              <EditButton type="button" onClick={onEditBtn}>
                <BiPencil />
              </EditButton>
              <Input readOnly defaultValue={city} />
            </>
          )}
          {isEdit && (
            <>
              <EditButton type="submit" onClick={onEditBtn}>
                <MdDone />
              </EditButton>
              <Input
                type="text"
                name="city"
                id={id}
                defaultValue={city}
                placeholder="Kyiv"
              />
            </>
          )}
        </InputWrap>
      </ItemWrap>
    </Wrapper>
  );
};

export default UserDataItem;
