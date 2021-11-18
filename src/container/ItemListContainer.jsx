import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../components/item-list/itemList";
import getProducts from "../helpers/getProducts.api";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
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
