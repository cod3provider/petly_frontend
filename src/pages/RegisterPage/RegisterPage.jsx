import RegisterForm from '../../components/AuthForm/RegisterForm/RegisterForm';
import { ContainerStyled } from '../../components/common/Container/Container.styled';
import { SectionStyled } from '../../components/common/Section/Section.styled';
import { AuthWraper, TitleH1 } from '../../components/AuthForm/RegisterForm/RegisterForm.style';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { useEffect } from 'react';

function RegisterPage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
  
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);

  return (
    <ContainerStyled>
      <SectionStyled>
        <AuthWraper>
          <TitleH1>Registration</TitleH1>
          <RegisterForm />
        </AuthWraper>
      </SectionStyled>
    </ContainerStyled>
  )
}

export default RegisterPage;
