import LoginForm from '../../components/AuthForm/LoginForm/LoginForm';
import { ContainerStyled } from '../../components/common/Container/Container.styled';
import { SectionStyled } from '../../components/common/Section/Section.styled';
import { AuthWraper } from '../../components/AuthForm/RegisterForm/RegisterForm.style';
import { TitleH1 } from '../../components/AuthForm/LoginForm/LoginForm.style';

function LoginPage() {
  return (
    <ContainerStyled>
      <SectionStyled>
        <AuthWraper>
          <TitleH1>Login</TitleH1>
          <LoginForm />
        </AuthWraper>
      </SectionStyled>
    </ContainerStyled>
  );
}

export default LoginPage;
