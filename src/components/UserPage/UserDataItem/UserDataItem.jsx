import { useState, useEffect } from 'react';
// import * as yup from 'yup';
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
  DataPickerBox,
} from './UserDataItem.styled';
import DatePicker from '../../common/DatePicker/DatePicker.jsx';

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

  const [state, setState] = useState({ name, email, phone, birthday, city });
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleNameSubmit = event => {
    event.preventDefault();
    const userName = event.target.name.value;
    dispatch(updateCurrentUser({ name: userName }));
    setData({ ...data, name: userName });
    setState(prev => ({ ...prev, name: userName }));
    setIsEditName(false);
  };

  const handleEmailSubmit = event => {
    event.preventDefault();
    const userEmail = event.target.email.value;
    dispatch(updateCurrentUser({ email: userEmail }));
    setData({ ...data, email: userEmail });
    setState(prev => ({ ...prev, email: userEmail }));
    setIsEditEmail(false);
  };

  useEffect(() => {
    setState({ name, email, phone, birthday, city });
  }, []);

  useEffect(() => {
    if (!selectedDay) {
      const newDate = new Date(birthday);
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      };
      const formatDate = newDate.toLocaleDateString('de-DE', options);
      // console.log(formatDate);
      setState(prev => ({ ...prev, birthday: formatDate }));
      return;
    }
    const newDate = new Date(selectedDay);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    const formatDate = newDate.toLocaleDateString('de-DE', options);
    // console.log(formatDate);
    const userBirthday = selectedDay;
    dispatch(updateCurrentUser({ birthday: userBirthday }));
    setData({ ...data, birthday: formatDate });
    setState(prev => ({ ...prev, birthday: formatDate }));
    setIsEditBirthday(false);
    setSelectedDay(null);
    setIsDateOpen(false);
  }, [birthday, data, dispatch, selectedDay, state.birthday]);

  const handlePhoneSubmit = event => {
    event.preventDefault();
    const userPhone = event.target.phone.value;

    dispatch(updateCurrentUser({ phone: userPhone }));
    setData({ ...data, phone: userPhone });
    setState(prev => ({ ...prev, phone: userPhone }));
    setIsEditPhone(false);
  };

  const handleCitySubmit = event => {
    event.preventDefault();
    const userCity = event.target.city.value;

    dispatch(updateCurrentUser({ city: userCity }));
    setData({ ...data, city: userCity });
    setState(prev => ({ ...prev, city: userCity }));
    setIsEditCity(false);
  };

  // const userDataValidationSchema = yup.object().shape({
  //   name: yup
  //     .string()
  //     .required('Enter the your name')
  //     .label('name')
  //     .transform(value => value.charAt(0).toUpperCase() + value.slice(1))
  //     .min(2)
  //     .max(16),
  //   birthday: yup
  //     .string()
  //     .required('Enter a date of birth')
  //     .name('birthday')
  //     .matches(
  //       /^\d{2}-\d{2}-\d{4}$/,
  //       'The date must be in the format DD.MM.YYYY'
  //     ),
  //   email: yup
  //     .string()
  //     .required('Enter the valid email')
  //     .name('email')
  //     .transform(value => value.charAt(0).toUpperCase() + value.slice(1))
  //     .min(2)
  //     .max(16),
  //   phone: yup
  //     .number()
  //     .required('Enter the valid phone')
  //     .name(phone)
  //     .matches(/^\+380\d{2}-\d{3}-\d{4}$/, 'Invalid phone number'),
  //   city: yup
  //     .string()
  //     .required('Enter the valid city')
  //     .name(city)
  //     .matches(/^[A-Za-z\s]+$/, 'Incorrect city format'),
  // });

  return (
    <Wrapper>
      <ItemWrap
        onSubmit={handleNameSubmit}
        // validationSchema={userDataValidationSchema}
      >
        <InputWrap>
          <Span>Name: </Span>
          <Label htmlFor={id}></Label>
          {!isEditName && (
            <>
              <EditButton type="button" onClick={() => setIsEditName(true)}>
                <BiPencil size={20} color={theme.baseColors.accentColor} />
              </EditButton>
              <Input readOnly defaultValue={state.name || name} />
            </>
          )}
          {isEditName && (
            <>
              <EditButton type="submit">
                <MdDone size={20} color="#00C3AD" />
              </EditButton>
              <Input
                type="text"
                defaultValue={state.name || name}
                name="name"
                id={id}
                required
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
              <Input readOnly defaultValue={state.email || email} />
            </>
          )}
          {isEditEmail && (
            <>
              <EditButton type="submit">
                <MdDone size={20} color="#00C3AD" />
              </EditButton>
              <Input
                type="email"
                defaultValue={state.email || email}
                name="email"
                id={id}
                required
                pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
              />
            </>
          )}
        </InputWrap>
      </ItemWrap>

      <ItemWrap
      // onSubmit={handleBirthdaySubmit}
      >
        <InputWrap>
          <Span>Birthday: </Span>
          <Label htmlFor={id}></Label>
          {!isEditBirthday && (
            <>
              <EditButton type="button" onClick={() => setIsEditBirthday(true)}>
                <BiPencil size={20} color={theme.baseColors.accentColor} />
              </EditButton>
              <Input readOnly defaultValue={state.birthday} />
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
                onFocus={() => setIsDateOpen(true)}
                defaultValue={state.birthday}
                placeholder="DD.MM.YYYY"
                dateformat="dd.MM.yyyy"
                pattern="(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)"
              />
              {isDateOpen && (
                <DataPickerBox>
                  <DatePicker
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                  />
                </DataPickerBox>
              )}
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
              <Input readOnly defaultValue={state.phone || phone} />
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
                defaultValue={state.phone || phone}
                minlength="13"
                maxlength="13"
                required
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
              <Input readOnly defaultValue={state.city || city} />
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
                required
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
