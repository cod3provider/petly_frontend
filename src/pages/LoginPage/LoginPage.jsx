import LoginForm from '../../components/AuthForm/LoginForm/LoginForm';
import { ContainerStyled } from '../../components/common/Container/Container.styled';
import { SectionStyled } from '../../components/common/Section/Section.styled';
import { AuthWraper } from '../../components/AuthForm/RegisterForm/RegisterForm.style';
import { TitleH1 } from '../../components/AuthForm/LoginForm/LoginForm.style';
import Loader from '../../components/Loader/Loader';
import { getLoading } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';


function LoginPage() {
  const isLoading = useSelector(getLoading);


  return (
    <ContainerStyled>
      <SectionStyled>
        <AuthWraper>
          <TitleH1>Login</TitleH1>
          <LoginForm />
          {isLoading && <Loader />}
        </AuthWraper>
      </SectionStyled>
    </ContainerStyled>
  );
}

export default LoginPage;
