import { Wrapper, MainWrap } from './UserData.styled';
import UserDataItem from '../UserDataItem/UserDataItem';
import UserAvatar from './UserAvatar';

const UserData = () => {
  return (
    <MainWrap>
      <UserAvatar />
      <Wrapper>
        <UserDataItem />
      </Wrapper>
    </MainWrap>
  );
};

export default UserData;
