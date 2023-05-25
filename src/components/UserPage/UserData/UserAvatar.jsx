import defaultUserImg from '../../../images/default-user-img.jpg';
import { AiOutlineCamera } from 'react-icons/ai';
import { theme } from '../../../utils/theme';
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
  FormThumb,
  CrossIcon,
} from './UserData.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAvatar, getUser } from '../../../redux/auth/authSelectors';
import { useRef } from 'react';
import { updateAvatar } from '../../../redux/auth/authOperations';

const UserAvatar = () => {
    const dispatch = useDispatch();
    const avatarUser = useSelector(getAvatar);
    const avatar = useRef(null);
    const avatarURL = useSelector(getUser);
      
    //   const isLoading = useSelector(getLoading);

      function OnSumbit(e) {
        const avatars = e.target.files[0];
        dispatch(updateAvatar({ avatar: avatars }));
      }

      function handelAvatar() {
        avatar.current.click();
    }
    
    

  return (
    <>
      <FormThumb onSubmit={handelAvatar}>
        {avatarURL ? (
          <ImageDef src={avatarURL.avatarUrl} alt="User Avatar" />
        ) : (
          <ImageDef
            src={defaultUserImg}
            alt="User Avatar"
            width="182px"
            height="182px"
            // onClick={() => {
            //   fileRef.current.click();
            // }}
          />
        )}

        {!avatarUser ? (
          <InputWrap>
            <Input
              accept="image/png, image/jpeg"
              type="file"
              name="avatar"
              id="input__file"
              ref={avatar}
              onChange={OnSumbit}
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
              ref={avatar}
                // onChange={selectHandler}
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
    </>
  );
};

export default UserAvatar;
