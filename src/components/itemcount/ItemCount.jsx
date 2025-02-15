/* eslint-disable react/prop-types */
import { useState } from "react";

const ItemCount = ({ max, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > initial) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    onAdd(quantity);
  };

  return (
    <div className="item-count">
      <div className="controls">
        <button className="btn btn-primary" onClick={decrement}>
          -
        </button>
        <span>{quantity}</span>
        <button className="btn btn-primary" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="btn btn-primary add-to-cart"
          onClick={handleAdd}
          disabled={!max}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
