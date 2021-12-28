import { getDoc, doc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/itemDetail/itemDetail";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { idProducto } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", idProducto);
    getDoc(docRef).then(docSnap => {
      if (docSnap.exists()) {
        setItem({id: docSnap.id, ...docSnap.data()});
      } else {
        console.log("No such document!");
      }
    });
  }, [idProducto]);

  return (
    <div style={{ padding: "30px 0" }}>
      {item ? <ItemDetail item={item} /> : null}
    </div>
  );
};

export default ItemDetailContainer;
