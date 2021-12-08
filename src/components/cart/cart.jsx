import numeral from "numeral";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../cartContext";
import CartItem from "../cartItem/cartItem";
import "./cart.css";

const Cart = () => {
  const { cartItems } = useContext(cartContext);

  const renderItems = () => (
    <div className="cart-wrapper">
      <div className="cart-header">
        <h2>Carrito de compras</h2>
      </div>
      {cartItems.items.map((item) => (
        <CartItem cartItem={item} key={item.item.id} />
      ))}
      <div className="cart-footer">
        <span>Total</span>
        <span style={{ minWidth: "100px" }}>
          {numeral(cartItems.total).format("$ 0,0.00")}
        </span>
      </div>
    </div>
  );

  const renderMessage = () => (
    <>
      <Link className="back-btn" to="/">Ver Productos</Link>
      <div className="message-container">
        <h2>Tu carrito de compras está vacío</h2>
      </div>
    </>
  );

  return (
    <div className="cart-container">
      {cartItems.items.length > 0 ? renderItems() : renderMessage()}
    </div>
  );
};

export default Cart;
