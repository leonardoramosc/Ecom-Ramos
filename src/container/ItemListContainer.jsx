import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import CustomSpinner from "../components/custom-spinner/custom-spinner";
import ItemList from "../components/item-list/itemList";
import { db } from "../firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const { id: category } = useParams();

  useEffect(() => {
    setShowSpinner(true);
    if (category) {
      const q = query(
        collection(db, "products"),
        where("category", "==", category)
      );
      getDocs(q)
        .then((querySnapshot) => {
          const result = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          setProducts(result);
        })
        .finally(() => {
          setShowSpinner(false);
        });
      return;
    }

    const productsCol = collection(db, "products");
      getDocs(productsCol)
        .then((productList) => {
          const products = productList.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          setProducts(products);
        })
        .finally(() => {
          setShowSpinner(false);
        });

  }, [category]);

  return (
    <div>
      {showSpinner && <CustomSpinner />}
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
