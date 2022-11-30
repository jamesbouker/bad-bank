import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useMainContext } from "../../contexts/MainContext";
import MyCard from "../MyCard/MyCard";

function CreateAccount() {
  const [showCreateAnother, setShowCreateAnother] = useState(false);
  return (
    <Container>
      <MyCard
        featured="Create Account"
        body={
          showCreateAnother ? (
            <CreateAnotherForm setShowCreateAnother={setShowCreateAnother} />
          ) : (
            <CreateAccountForm setShowCreateAnother={setShowCreateAnother} />
          )
        }
      />
    </Container>
  );
}

function CreateAnotherForm(props) {
  return (
    <div>
      <Card.Text>Success!</Card.Text>
      <Button
        onClick={() => {
          props.setShowCreateAnother(false);
        }}
      >
        {" "}
        Create Another Account
      </Button>
    </div>
  );
}

function CreateAccountForm(props) {
  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    signUpAccount,
  } = useMainContext();
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (signUpAccount()) {
          props.setShowCreateAnother(true);
        }
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onInput={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
      </Form.Group>

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
        Create Account
      </Button>
    </Form>
  );
}

export default CreateAccount;
