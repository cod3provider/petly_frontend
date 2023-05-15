import RegisterForm from '../../components/AuthForm/RegisterForm/RegisterForm'
import { ContainerStyled } from '../../components/common/Container/Container.styled';

function RegisterPage() {
    return (
    <ContainerStyled>
        <h1>Registration</h1>
        <RegisterForm/>
    </ContainerStyled>
    )
}

export default RegisterPage;
