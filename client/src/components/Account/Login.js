import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { useMainContext } from "../../contexts/MainContext";
import MyCard from "../MyCard/MyCard";

function Login() {
  return (
    <Container>
      <MyCard featured="Create Account" body={<LoginForm />} />
    </Container>
  );
}

function LoginForm(props) {
  const { email, password, setEmail, setPassword, login } = useMainContext();
  const navigate = useNavigate();
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        login((success) => {
          if (success) {
            navigate("/logout");
          }
        });
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;
