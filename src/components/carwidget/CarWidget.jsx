import cartIcon from "../../assets/cart-svg.svg";
import { useState, useEffect } from "react";

const CarWidget = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setCartProducts(["6"]);
  }, []);

  return (
    <>
      <img src={cartIcon} alt="Cart Icon" className="cartIcon" />
      <span className="itemCount">{cartProducts}</span>
    </>
  );
};

export default CarWidget;
