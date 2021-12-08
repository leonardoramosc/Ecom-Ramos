import { collection, getDocs } from "@firebase/firestore/lite";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import ItemList from "../components/item-list/itemList";
import { db } from "../firebase/firebase";
import { getProducts, getProductsByCategory } from "../helpers/products.api";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id: category } = useParams();

  // useEffect(() => {
  //   const productsCol = collection(db, "productos");
  //   getDocs(productsCol).then(productList => {
  //     const products = productList.docs.map(doc => doc.data());
  //     console.log(products);
  //   })
  // }, []);

  useEffect(() => {
    if (category) {
      return getProductsByCategory(category)().then(data => {
        setProducts(data);
      })
    }

    getProducts().then((data) => {
      setProducts(data);
    });
  }, [category]);

  return (
    <div>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
