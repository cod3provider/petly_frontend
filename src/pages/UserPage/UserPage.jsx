import UserData from '../../components/UserPage/UserData';
import UserPets from '../../components/UserPage/UserPets';
import { ContainerStyled } from '../../components/common/Container/Container.styled';
import { SectionStyled } from '../../components/common/Section/Section.styled';

export default function UserPage() {
  return (
    <ContainerStyled>
      <SectionStyled>
        <UserData />
        <UserPets />
      </SectionStyled>
    </ContainerStyled>
  );
}
