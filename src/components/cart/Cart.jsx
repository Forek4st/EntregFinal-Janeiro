import { useContext, useState } from "react";
import CartItem from "../cartitem/CartItem.jsx";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderConfirmation from "../orderconfirmation/OrderConfirmation.jsx";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const checkOut = () => {
    if (cart.length === 0) {
      toast.error(
        "Your cart is empty. Add items to the cart before checking out."
      );
      return;
    }
    toast.success(`Check Out Completed, Check your orders`);
    setOrderCompleted(true);
    clearCart();
  };

  if (!cart) {
    return <div>Loading...</div>;
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="cart">
      {orderCompleted ? (
        <OrderConfirmation />
      ) : (
        <>
          <h2>Your Cart</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <CartItem item={item} onRemove={() => removeFromCart(item.id)} />
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

          <Button
            variant="primary"
            className="checkout-button"
            onClick={checkOut}
            disabled={cart.length === 0}
          >
            Check Out
          </Button>
        </>
      )}
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
    </main>
  );
};

export default Cart;
