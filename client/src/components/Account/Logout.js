import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { useMainContext } from "../../contexts/MainContext";
import MyCard from "../MyCard/MyCard";

function Logout() {
  return (
    <Container>
      <MyCard featured="Logout" body={<LogoutForm />} />
    </Container>
  );
}

function LogoutForm(props) {
  const { account, logout } = useMainContext();
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        logout();
        navigate("/login");
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Email address: {account?.email}</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Name: {account?.name}</Form.Label>
      </Form.Group>

      <Button variant="primary" type="submit">
        Logout
      </Button>
    </Form>
  );
}

export default Logout;
