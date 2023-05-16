import UserData from './UserProfile/UserData';
// import UserPets from './UserProfile/UserPets';
import { ContainerStyled } from '../common/Container/Container.styled';
import { SectionStyled } from '../common/Section/Section.styled';

export default function UserPage() {
  return (
    <ContainerStyled>
      <SectionStyled>
        <UserData />
        {/* <UserPets /> */}
      </SectionStyled>
    </ContainerStyled>
  );
}
