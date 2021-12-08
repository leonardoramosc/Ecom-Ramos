import numeral from "numeral";
import { useContext } from "react";
import { cartContext } from "../../cartContext";
import ItemCount from "../itemCount/itemCount";
import "./cartItem.css";

const CartItem = ({ cartItem }) => {
  const { removeItem, subtractItem, addNewItem } = useContext(cartContext);
  const { item, quantity, total } = cartItem;

  const onDelete = () => {
    removeItem(item.id);
  };

  const onSubtract = () => {
    subtractItem(item.id);
  };

  const onAdd = () => {
    addNewItem(item, 1);
  };

  return (
    <div className="cart-item-wrapper">
      <div className="cart-item-content">
        <button className="delete-item-btn" onClick={onDelete}>
          <img
            src="https://img.icons8.com/external-becris-lineal-becris/50/000000/external-cancel-mintab-for-ios-becris-lineal-becris.png"
            alt=""
          />
        </button>
        <div className="cart-item-details">
          <img className="cart-item-image" src={item.img} alt={item.name} />
          <h3 className="cart-item-title">{item.title}</h3>
        </div>
        <ItemCount
          stock={item.stock}
          initialCount={quantity}
          onRemove={onSubtract}
          onAdd={onAdd}
        />
        <span style={{minWidth: '100px'}}>{numeral(total).format("$ 0,0.00")}</span>
      </div>
    </div>
  );
};

export default CartItem;
