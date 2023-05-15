import LoginForm from "../../components/AuthForm/LoginForm/LoginForm";
import { ContainerStyled } from "../../components/common/Container/Container.styled";

function LoginPage() {
    return (
        <ContainerStyled>
            <h1>Login</h1>
            <LoginForm/>
        </ContainerStyled>
    )
}

export default LoginPage;
