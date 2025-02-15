/* eslint-disable react/prop-types */
import { useContext } from "react";
import ItemCount from "../itemcount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, description, price, category, image }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    toast.success(`Added ${quantity} ${name} to the cart!`);
    addToCart({ id, name, price, quantity });
  };

  return (
    <div className="item-detail-container">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="detail-description">{description}</p>
      <p>From: {price}</p>
      <p>Category: {category}</p>
      <small>Max 1 Product</small>
      <ItemCount max={1} initial={1} onAdd={handleAddToCart} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ItemDetail;
