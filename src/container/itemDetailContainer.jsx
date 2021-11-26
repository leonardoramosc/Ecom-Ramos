import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/itemDetail/itemDetail";
import { getProductById } from "../helpers/products.api";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { idProducto } = useParams();

  useEffect(() => {
    getProductById(+idProducto)().then((product) => {
      setItem(product);
    });
  }, [idProducto]);

  return (
    <div style={{ padding: "30px 0" }}>
      {item ? <ItemDetail item={item} /> : null}
    </div>
  );
};

export default ItemDetailContainer;
