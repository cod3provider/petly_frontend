import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { BiPencil } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';
import { theme } from '../../../utils/theme.jsx';

import { getUser } from '../../../redux/auth/authSelectors.js';

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
  const [isEditName, setIsEditName] = useState(false);
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isEditBirthday, setIsEditBirthday] = useState(false);
  const [isEditPhone, setIsEditPhone] = useState(false);
  const [isEditCity, setIsEditCity] = useState(false);
  const [data, setData] = useState(initialState);
  const id = useMemo(() => nanoid(), []);

  const handleNameSubmit = event => {
    event.preventDefault();
    const userName = event.target.name.value;
    dispatch(updateCurrentUser({ name: userName }));
    setData({ ...data, name: userName });
    setIsEditName(false);
  };

  const handleEmailSubmit = event => {
    event.preventDefault();
    const userEmail = event.target.email.value;
    dispatch(updateCurrentUser({ email: userEmail }));
    setData({ ...data, email: userEmail });
    setIsEditEmail(false);
  };

  const handleBirthdaySubmit = event => {
    event.preventDefault();
    const userBirthday = event.target.birthday.value;
    dispatch(updateCurrentUser({ birthday: userBirthday }));
    setData({ ...data, birthday: userBirthday });
    setIsEditBirthday(false);
  };

  const handlePhoneSubmit = event => {
    event.preventDefault();
    const userPhone = event.target.phone.value;

    dispatch(updateCurrentUser({ phone: userPhone }));
    setData({ ...data, phone: userPhone });
    setIsEditPhone(false);
  };

  const handleCitySubmit = event => {
    event.preventDefault();
    const userCity = event.target.city.value;

    dispatch(updateCurrentUser({ city: userCity }));
    setData({ ...data, city: userCity });
    setIsEditCity(false);
  };

  return (
    <Wrapper>
      <ItemWrap onSubmit={handleNameSubmit}>
        <InputWrap>
          <Span>Name: </Span>
          <Label htmlFor={id}></Label>
          {!isEditName && (
            <>
              <EditButton type="button" onClick={() => setIsEditName(true)}>
                <BiPencil size={20} color={theme.baseColors.accentColor} />
              </EditButton>
              <Input readOnly defaultValue={name} />
            </>
          )}
          {isEditName && (
            <>
              <EditButton type="submit">
                <MdDone size={20} color="#00C3AD" />
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
          {!isEditEmail && (
            <>
              <EditButton type="button" onClick={() => setIsEditEmail(true)}>
                <BiPencil size={20} color={theme.baseColors.accentColor} />
              </EditButton>
              <Input readOnly defaultValue={email} />
            </>
          )}
          {isEditEmail && (
            <>
              <EditButton type="submit">
                <MdDone size={20} color="#00C3AD" />
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
          {!isEditBirthday && (
            <>
              <EditButton type="button" onClick={() => setIsEditBirthday(true)}>
                <BiPencil size={20} color={theme.baseColors.accentColor} />
              </EditButton>
              <Input readOnly defaultValue={birthday} />
            </>
          )}
          {isEditBirthday && (
            <>
              <EditButton type="submit">
                <MdDone size={20} color="#00C3AD" />
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
          {!isEditPhone && (
            <>
              <EditButton type="button" onClick={() => setIsEditPhone(true)}>
                <BiPencil size={20} color={theme.baseColors.accentColor} />
              </EditButton>
              <Input readOnly defaultValue={phone} />
            </>
          )}
          {isEditPhone && (
            <>
              <EditButton type="submit">
                <MdDone size={20} color="#00C3AD" />
              </EditButton>
              <Input
                type="phone"
                name="phone"
                id={id}
                defaultValue={phone}
                minlength="13"
                maxlength="13"
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
          {!isEditCity && (
            <>
              <EditButton type="button" onClick={() => setIsEditCity(true)}>
                <BiPencil size={20} color={theme.baseColors.accentColor} />
              </EditButton>
              <Input readOnly defaultValue={city} />
            </>
          )}
          {isEditCity && (
            <>
              <EditButton type="submit">
                <MdDone size={20} color="#00C3AD" />
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
