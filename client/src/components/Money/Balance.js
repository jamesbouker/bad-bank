import { useMainContext } from "../../contexts/MainContext";
import { Button, Container, Form } from "react-bootstrap";
import MyCard from "../MyCard/MyCard";
import { useNavigate } from "react-router-dom";

function Balance() {
  const { account } = useMainContext();
  const navigate = useNavigate();

  return (
    <Container>
      <MyCard
        featured="Balance"
        body={
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Balance: ${account?.balance}</Form.Label>
            </Form.Group>

            <Button
              style={{ marginRight: "0.5rem" }}
              onClick={() => navigate("/withdraw")}
            >
              Withdraw
            </Button>
            <Button onClick={() => navigate("/deposit")}>Deposit</Button>
          </Form>
        }
      />
    </Container>
  );
}

export default Balance;
