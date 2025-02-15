/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ id, name, description, price, category, image }) => {
  return (
    <Card style={{ width: "18rem", height: "30rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>From: {price}</Card.Text>
        <small>{category}</small>
        <Link to={`/item/${id}`}>
          <Button variant="primary">See More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
