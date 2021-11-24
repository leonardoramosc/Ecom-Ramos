import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../components/item-list/itemList";
import { getMostSelledProducts } from "../helpers/products.api";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getMostSelledProducts(5).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
