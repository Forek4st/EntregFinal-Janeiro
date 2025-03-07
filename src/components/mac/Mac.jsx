import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../itemlist/ItemList";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/firebase.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Mac = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(
          collection(db, "products"),
          where("category", "in", ["Laptops", "Desktops"])
        );
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="item-container">
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Mac;
