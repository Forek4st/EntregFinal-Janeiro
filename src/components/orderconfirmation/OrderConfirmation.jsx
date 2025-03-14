import React from "react";

const OrderConfirmation = () => {
  const orderNumber = Math.floor(Math.random() * 1000000);

  return (
    <div className="order-confirmation">
      <h2>Thank you for your order!</h2>
      <p>Your order number is: {orderNumber}</p>
    </div>
  );
};

export default OrderConfirmation;
