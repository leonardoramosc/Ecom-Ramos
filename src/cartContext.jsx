import { createContext, useState } from "react";
import { calcPriceWithDiscount } from "./helpers/products.api";

export const cartContext = createContext();

const INITIAL_STATE = { total: 0, items: [] };

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(INITIAL_STATE);

  const addNewItem = (newItem, quantity) => {
    if (!quantity) {
      return;
    }

    const cartItem = getCartItem(newItem.id);

    // si el producto no esta en el carrito, agregrarlo
    if (!cartItem) {
      const temp = cartItems;
      temp.items.push({ item: newItem, quantity });
      temp.total += (calcPriceWithDiscount(newItem) * quantity);
      setCartItems(temp);
      return;
    }

    // Si el producto ya esta en el carrito, aumentar la cantidad
    // solo si la cantidad total NO excede el stock
    const totalQuantity = cartItem.quantity + quantity;

    if (totalQuantity <= cartItem.item.stock) {
      const total = cartItems.total + calcPriceWithDiscount(cartItem.item);
      cartItem.quantity = totalQuantity;
      const newState = {
        ...cartItems,
        total,
      };
      setCartItems(newState);
    }
  };

  const getCartItem = (id) => {
    return cartItems.items.find((cartItem) => cartItem.item.id === id);
  };

  const removeItem = (id) => {
    let targetItem;
    const newItems = cartItems.items.filter((cartItem) => {
      if (cartItem.item.id !== id) {
        targetItem = cartItem;
        return true;
      }
      return false;
    });
    setCartItems({
      ...cartItems,
      items: newItems,
      total: cartItems.total - targetItem.item.price,
    });
  };

  const clearCartItems = () => {
    setCartItems({ total: 0, items: [] });
  };

  return (
    <cartContext.Provider
      value={{ cartItems, addNewItem, removeItem, clearCartItems }}
    >
      {props.children}
    </cartContext.Provider>
  );
};
