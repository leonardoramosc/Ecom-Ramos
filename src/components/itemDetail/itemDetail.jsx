import numeral from "numeral";
import ItemCount from "../itemCount/itemCount";
import "./itemDetail.css";

const ItemDetail = ({ item }) => {
  const calcPriceWithDiscount = (item) => {
    const discountAmount = (item.discountPercentage * item.price) / 100;
    const priceWithDiscount = item.price - discountAmount;
    return numeral(priceWithDiscount).format("0,0.00");
  };

  const withDiscountPercentageStyle = {
    display: item.discountPercentage > 0 ? "block" : "none",
  };

  return (
    <div className="item-detail-wrapper">
      <div className="item-detail">
        <div className="item-image">
          <img height="320" src={item.img} alt="" />
        </div>
        <div className="item-info">
          <div className="item-info__header">
            <p className="item-info__header-sold">{item.sold} vendidos</p>
            <h1 className="item-info__header-title">{item.title}</h1>
          </div>
          <div className="item-info__price">
            <p
              style={withDiscountPercentageStyle}
              className="item-info__price--real-price"
            >
              {numeral(item.price).format("$0,0.00")}
            </p>
            <h2 className="item-info__price--with-discount">
              $ {calcPriceWithDiscount(item)}
              <span
                className="item-info__price--discount"
                style={withDiscountPercentageStyle}
              >
                {item.discountPercentage}% OFF
              </span>
            </h2>
          </div>
          <div className="item-info__stock">
            <p className="item-info__stock--status">
              {`Stock ${
                item.stock > 0 ? `disponible: ${item.stock}` : "agotado"
              }`}
            </p>
            {item.stock > 0 && (
              <div className="item-info__stock--addtocart">
                <ItemCount stock={item.stock} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <section className="item-detail__description">
        <h3 className="item-detail__description--title">Descripción</h3>
        <p className="item-detail__description--text">{item.description}</p>
      </section>
    </div>
  );
};

export default ItemDetail;
