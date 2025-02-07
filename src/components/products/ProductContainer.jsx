/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductContainer(props) {
  const { title, text, price, img } = props;
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <small>{text}</small>
        </Card.Text>
        <Card.Text>
          <small>{price}</small>
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductContainer;
