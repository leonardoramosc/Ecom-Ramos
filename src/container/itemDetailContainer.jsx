import { getDoc, doc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CustomSpinner from "../components/custom-spinner/custom-spinner";
import ItemDetail from "../components/itemDetail/itemDetail";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [noProduct, setNoProduct] = useState(false);
  const { idProducto } = useParams();

  useEffect(() => {
    setShowSpinner(true);
    const docRef = doc(db, "products", idProducto);
    getDoc(docRef).then(docSnap => {
      if (docSnap.exists()) {
        setItem({id: docSnap.id, ...docSnap.data()});
      } else {
        setNoProduct(true);
      }
    }).finally(() => {
      setShowSpinner(false);
    })
  }, [idProducto]);

  return (
    <div style={{ padding: "30px 0" }}>
      {showSpinner && <CustomSpinner />}
      {item ? <ItemDetail item={item} /> : null}
      {noProduct && <h2 className="ps-5">Lo sentimos, No pudimos encontrar tu producto.</h2>}
    </div>
  );
};

export default ItemDetailContainer;
