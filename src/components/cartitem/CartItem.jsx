import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const CartItem = ({ item, onRemove }) => {
  const handleRemove = () => {
    toast.info(`${item.name} removed from cart`);
    onRemove();
  };

  return (
    <>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "100px", height: "auto" }}
      />
      <h3>{item.name}</h3>
      <div className="cart-info">
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <span onClick={handleRemove}>x</span>
      </div>
    </>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
