import { StyledButton, ButtonText } from './AuthFormButton.styled';

// eslint-disable-next-line react/prop-types
function AuthFormButton({ children }) {
    return (
        <StyledButton type="submit">
            <ButtonText>{children}</ButtonText>
        </StyledButton>
    );
}

export default AuthFormButton;