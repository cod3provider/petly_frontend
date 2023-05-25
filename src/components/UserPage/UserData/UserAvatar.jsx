import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from '../../../redux/auth/authOperations';
import { getUser } from '../../../redux/auth/authSelectors';
import { ConfirmBtn, FormThumb, ImageDef, Input, InputWrap, Label } from './UserData.styled';
import { AiOutlineCamera } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';


const UserData = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const [photoEdit, setPhotoEdit] = useState(false);
  const [photoLoaded, setPhotoLoaded] = useState(false);

  const photoPrewiew = e => {
    const imageFile = e.target.files[0];
    const imageURL = URL.createObjectURL(imageFile);
    setPhotoLoaded(imageURL);
    setPhotoEdit(imageFile);
  };

  const changePhoto = () => {
    dispatch(updateAvatar({ ...user, avatar: photoEdit }));
    setPhotoEdit(false);
  };

  return (
    <FormThumb>
      <div>
        <ImageDef
          src={!photoLoaded ? user.avatarUrl : photoLoaded}
          alt="user"
        />
        {!photoEdit ? (
          <InputWrap>
            <AiOutlineCamera />
            <Label htmlFor="photo">
              <Input name="photo" type="file" onChange={photoPrewiew} />
              <span>Edit photo</span>
            </Label>
          </InputWrap>
        ) : (
          <div>
            <ConfirmBtn type="button" onClick={changePhoto}>
              <AiOutlineCheck />
              <span>Confirm</span>
            </ConfirmBtn>
          </div>
        )}
      </div>
    </FormThumb>
  );
};

export default UserData;
