import { useMainContext } from "../../contexts/MainContext";
import { Button, Container, Form } from "react-bootstrap";
import MyCard from "../MyCard/MyCard";
import { useState } from "react";

function Deposit() {
  const { account, deposit } = useMainContext();
  const [amount, setAmount] = useState(0);

  return (
    <Container>
      <MyCard
        featured="Deposit"
        body={
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Current Balance: ${account.balance}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Deposit: </Form.Label>
              <Form.Control
                type="number"
                placeholder="0.00"
                value={amount}
                onInput={(e) => {
                  const amount = parseFloat(e.target.value);
                  setAmount(amount);
                }}
              />
            </Form.Group>

            <Button
              onClick={() => {
                if (amount > 0) {
                  deposit(amount);
                  setAmount(0);
                }
              }}
            >
              Deposit
            </Button>
          </Form>
        }
      />
    </Container>
  );
}

export default Deposit;
