import RegisterForm from '../../components/AuthForm/RegisterForm/RegisterForm';
import { ContainerStyled } from '../../components/common/Container/Container.styled';
import { SectionStyled } from '../../components/common/Section/Section.styled';
import { AuthWraper, TitleH1 } from '../../components/AuthForm/RegisterForm/RegisterForm.style';

function RegisterPage() {
  return (
    <ContainerStyled>
      <SectionStyled>
        <AuthWraper>
          <TitleH1>Registration</TitleH1>
          <RegisterForm />
        </AuthWraper>
      </SectionStyled>
    </ContainerStyled>
  );
}

export default RegisterPage;
