import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getIsNewUser, getUser } from '../../redux/auth/authSelectors';
import { getCurrentUser } from '../../redux/auth/authOperations';


import UserData from '../../components/UserPage/UserData/UserData';
import UserPets from '../../components/UserPage/PetsData/PetsData';
import Logout from '../../components/Logout/Logout';
import { ContainerStyled } from '../../components/common/Container/Container.styled';
import { SectionStyled } from '../../components/common/Section/Section.styled';
import { Wrap, UserDiv, Title, UserWrapper } from './UserPage.styled.jsx';
import { useToggle } from '../../hooks/useToggle';
import { PetWrapper } from '../../components/UserPage/PetsData/PetsData.styled.jsx';
import { setIsNewUser } from '../../redux/auth/authSlice';
import ModalBack from '../../components/Modals/ModalBack';
import ModalCongrats from '../../components/Modals/ModalCongrats/ModalCongrats';

function UserPage() {
  const dispatch = useDispatch();
  const { open } = useToggle();

  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

    const isNewUser = useSelector(getIsNewUser);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const onClose = () => {
      setIsModalOpen(!isModalOpen);
      dispatch(setIsNewUser(!isNewUser));
    };

  return (
    <ContainerStyled style={{ background: '#FEF9F9' }}>
      <SectionStyled>
        <UserDiv>
          <UserWrapper>
            <Title>My information:</Title>
            <Wrap>
              <UserData />
              <Logout onClick={open} />
            </Wrap>
          </UserWrapper>
          <PetWrapper>
            <UserPets />
          </PetWrapper>
          {isNewUser ? (
            <ModalBack onClose={onClose}>
              <ModalCongrats onClose={onClose} />
            </ModalBack>
          ) : null}
          {/*<UserPets />*/}
        </UserDiv>
      </SectionStyled>
    </ContainerStyled>
  );
}
export default UserPage;
