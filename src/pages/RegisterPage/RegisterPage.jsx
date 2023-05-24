import RegisterForm from '../../components/AuthForm/RegisterForm/RegisterForm';
import { ContainerStyled } from '../../components/common/Container/Container.styled';
import { SectionStyled } from '../../components/common/Section/Section.styled';
import { AuthWraper, TitleH1 } from '../../components/AuthForm/RegisterForm/RegisterForm.style';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getLoading } from '../../redux/auth/authSelectors';
import { useEffect } from 'react';

import Loader from '../../components/Loader/Loader';
import { BackgroundImageDiv } from '../../components/common/BgImage/BgImage.styled';

function RegisterPage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getLoading);
  
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
          {isLoading && <Loader />}
          <BackgroundImageDiv />
        </AuthWraper>
      </SectionStyled>
    </ContainerStyled>
  );
}

export default RegisterPage;
