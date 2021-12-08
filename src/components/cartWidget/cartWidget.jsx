import shoppingCart from './shopping-cart.svg';
import './cartWidget.css';
import { useContext } from 'react';
import { cartContext } from '../../cartContext';
import { useState, useEffect } from 'react';

const CartWidget = () => {
  const [total, setTotal] = useState(0);
  const { cartItems } = useContext(cartContext);

  useEffect(() => {
    let temp = 0;
    cartItems.items.forEach(i => temp += i.quantity);

    setTotal(temp);
  }, [cartItems]);

  

  return (
    <>
      <span style={{opacity: total > 0 ? '1' : '0'}} className="cart-widget">
        <span className="cart-widget__quantity">{total}</span>
        <img src={shoppingCart} alt="shopping cart logo" height="30" />
      </span>
    </>
  );
}

export default CartWidget;