import cartIcon from "../../assets/cart-svg.svg";

let cartProducts = [1, 2, 3, 4];

const CarWidget = () => {
  const itemCount = cartProducts.length;

  return (
    <>
      <img src={cartIcon} alt="Cart Icon" className="cartIcon" />
      <span className="itemCount">{itemCount}</span>
    </>
  );
};

export default CarWidget;
