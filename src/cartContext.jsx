import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addNewItem = (newItem, quantity) => {
    const cartItem = getCartItem(newItem.id);

    // si el producto no esta en el carrito, agregrarlo
    if (!cartItem) {
      const temp = cartItems;
      temp.push({ item: newItem, quantity });
      setCartItems(temp);
      return;
    }

    // Si el producto ya esta en el carrito, aumentar la cantidad
    // solo si la cantidad total NO excede el stock
    const totalQuantity = cartItem.quantity + quantity;

    if (totalQuantity < cartItem.stock) {
      cartItem.quantity = totalQuantity;
    }
  };

  const getCartItem = (id) => {
    return cartItems.find((cartItem) => cartItem.item.id === id);
  };

  const removeItem = (id) => {
    const newItems = cartItems.filter(cartItem => cartItem.item.id !== id);
    setCartItems(newItems);
  }

  const clearCartItems = () => {
    setCartItems([]);
  }

  return (
    <cartContext.Provider value={{ cartItems, addNewItem, removeItem, clearCartItems }}>
      {props.children}
    </cartContext.Provider>
  );
};
