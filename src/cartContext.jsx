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
      const temp = {...cartItems};
      const itemTotal = calcPriceWithDiscount(newItem) * quantity;
      temp.items.push({ item: newItem, quantity, total: itemTotal });
      temp.total += itemTotal;
      return setCartItems(temp);
    }

    // Si el producto ya esta en el carrito, aumentar la cantidad
    // solo si la cantidad total NO excede el stock
    const totalQuantity = cartItem.quantity + quantity;

    if (totalQuantity <= cartItem.item.stock) {
      const total = cartItems.total + calcPriceWithDiscount(cartItem.item);
      cartItem.quantity = totalQuantity;
      cartItem.total += calcPriceWithDiscount(cartItem.item);
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
        return true;
      }
      targetItem = cartItem;
      return false;
    });

    const newState = {
      ...cartItems,
      items: newItems,
    }

    if(targetItem.quantity) {
      const total = cartItems.total - calcPriceWithDiscount(targetItem.item);
      newState.total = total;
      return setCartItems(newState);
    }

    setCartItems(newState);
  };

  const subtractItem = (id) => {
    // encontrar el item con ese id
    const cartItem = getCartItem(id);

    if (!cartItem) return;

    // cambiar el total y la cantidad de ese item
    const currentPrice = calcPriceWithDiscount(cartItem.item);
    const cartTotal = Math.round((cartItems.total - currentPrice) * 100) / 100;
    const itemTotal = Math.round((cartItem.total - currentPrice) * 100) / 100;
    cartItem.total = itemTotal;
    cartItem.quantity -= 1;

    // Cambiar el total del carrito
    setCartItems({
      ...cartItems,
      total: cartTotal
    });
  }

  const clearCartItems = () => {
    setCartItems({ total: 0, items: [] });
  };

  return (
    <cartContext.Provider
      value={{ cartItems, addNewItem, removeItem, subtractItem, clearCartItems }}
    >
      {props.children}
    </cartContext.Provider>
  );
};
