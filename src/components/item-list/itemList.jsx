import Item from "../item/item";
import "./itemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="item-list-wrapper">
      <h2>Top 5 Más Vendidos</h2>
      <div className="item-list">
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
