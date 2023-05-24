import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../redux/auth/authSelectors';
import { getCurrentUser } from '../../redux/auth/authOperations';

import UserData from '../../components/UserPage/UserData/UserData';
import UserPets from '../../components/UserPage/PetsData/PetsData';
import Logout from '../../components/Logout/Logout';
import { ContainerStyled } from '../../components/common/Container/Container.styled';
import { SectionStyled } from '../../components/common/Section/Section.styled';
import { Wrap, UserDiv, Title } from './UserPage.styled';
import { useToggle } from '../../hooks/useToggle';

function UserPage() {
  const dispatch = useDispatch();
  const { isOpen, open, close } = useToggle();

  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <ContainerStyled style={{ background: '#FEF9F9' }}>
      <SectionStyled>
        <UserDiv>
          <div>
            <Title>My information:</Title>
            <Wrap>
              <UserData />
              <Logout onClick={open} />
            </Wrap>
          </div>
          <UserPets />
        </UserDiv>
      </SectionStyled>
    </ContainerStyled>
  );
}
export default UserPage;
