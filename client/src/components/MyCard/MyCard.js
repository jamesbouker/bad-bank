import Card from "react-bootstrap/Card";

const MyCard = (props) => {
  return (
    <Card>
      <Card.Header>{props.featured}</Card.Header>
      <Card.Body>
        {props.title && <Card.Title>{props.title}</Card.Title>}
        <Card.Body>{props.body}</Card.Body>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
