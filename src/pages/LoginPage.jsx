import Container from "../containers/Container";
import LoginForm from "../components/forms/LoginForm";
import HalfContainer from "../containers/HalfContainer";
import useLoginFields from "../hooks/loginPage/useLoginFields";

function LoginPage() {
  const [fields, onChange, isValidating, onSubmit] = useLoginFields();

  return (
    <Container>
      <HalfContainer>
        <LoginForm
          fields={fields}
          onChange={onChange}
          isValidating={isValidating}
          onSubmit={onSubmit}
        />
      </HalfContainer>
    </Container>
  );
}

export default LoginPage;
