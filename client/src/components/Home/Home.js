import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import MyCard from "../MyCard/MyCard";

function Home() {
  return (
    <Container>
      <MyCard
        featured="Bad-Bank"
        body={
          <Card.Body>
            <Card.Title>Welcome to the bank!</Card.Title>
            <Card.Text>You can move around using the navigation bar.</Card.Text>
          </Card.Body>
        }
      />
    </Container>
  );
}

export default Home;
