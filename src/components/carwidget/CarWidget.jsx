import { useContext } from "react";
import cartIcon from "../../assets/cart-svg.svg";
import { CartContext } from "../../context/CartContext";

const CarWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <img src={cartIcon} alt="Cart Icon" className="cartIcon" />
      <span className="itemCount">{cart.length}</span>
    </>
  );
};

export default CarWidget;
