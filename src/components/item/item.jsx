import "./item.css";

const Item = ({ item }) => {
  return (
    <div className="item">
      <div className="item-image-container">
        <img
          src={item.img}
          alt={item.title}
        />
      </div>
      <div className="divider"></div>
      <div className="item-details">
        <div className="detail item-price">$ {item.price}</div>
        <div className="detail item-title">{item.title}</div>
        <div className="detail item-description">
          {item.description}
        </div>
      </div>
    </div>
  );
};

export default Item;
