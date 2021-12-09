import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import ItemList from "../components/item-list/itemList";
import { db } from "../firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id: category } = useParams();

  useEffect(() => {
    if (category) {
      const q = query(
        collection(db, "products"),
        where("category", "==", category)
      );
      getDocs(q).then((querySnapshot) => {
        const result = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProducts(result);
      });
      return;
    }

    const productsCol = collection(db, "products");
    getDocs(productsCol).then((productList) => {
      const products = productList.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setProducts(products);
    });
  }, [category]);

  return (
    <div>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
