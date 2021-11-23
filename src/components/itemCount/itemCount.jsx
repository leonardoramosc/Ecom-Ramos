import "./itemCount.css";
import AddIcon from "./add.svg";
import SubtractIcon from './subtract.svg';
import { useState } from "react";

const ItemCount = ({ stock }) => {
  const MINIMUM_QUANTITY = 1;
  const [count, setCount] = useState(MINIMUM_QUANTITY);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > MINIMUM_QUANTITY) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    console.log(`AGREGAR AL CARRITO LA CANTIDAD DE ${count} ITEMS`);
  }

  return (
    <div className="item-count-wrapper">
      <div className="item-count">
        <button className="item-count__btn" onClick={increment}>
          <img height="12" src={AddIcon} alt="Incrementar" />
        </button>
        <span className="item-count__quantity">{count}</span>
        <button className="item-count__btn" onClick={decrement}>
          <img
            height="13"
            src={SubtractIcon}
            alt="disminuir"
          />
        </button>
      </div>
      <button className="add-cart-btn" onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
