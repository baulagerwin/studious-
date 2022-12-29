import HalfContainer from "../containers/HalfContainer";
import Container from "../containers/Container";
import RegisterForm from "../components/forms/RegisterForm";
import useRegisterFields from "../hooks/registerPage/useRegisterFields";

function RegisterPage() {
  const [fields, onChange, isValidating, onSubmit] = useRegisterFields();

  return (
    <Container>
      <HalfContainer>
        <RegisterForm
          fields={fields}
          onChange={onChange}
          isValidating={isValidating}
          onSubmit={onSubmit}
        />
      </HalfContainer>
    </Container>
  );
}

export default RegisterPage;
