import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ItemList from "../itemlist/ItemList.jsx";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/firebase.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ItemListContainer = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
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

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <main className="item-container">
      <div className="list-group">
        {filteredProducts.length > 0 ? (
          <ItemList products={filteredProducts} />
        ) : (
          <p className="product-not-found">
            No results found for "{searchTerm}", try another product.
          </p>
        )}
      </div>
    </main>
  );
};

export default ItemListContainer;
