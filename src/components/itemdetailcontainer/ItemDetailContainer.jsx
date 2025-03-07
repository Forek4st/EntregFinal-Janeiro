import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../itemdetail/ItemDetail";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/firebase.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <main className="item-detail">
      {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
    </main>
  );
};

export default ItemDetailContainer;
