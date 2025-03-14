/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/firebase.js";
import ItemCount from "../itemcount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../context/CartContext";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ItemDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
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

  const handleAddToCart = (quantity) => {
    if (product) {
      toast.success(`Added ${quantity} ${product.name} to the cart!`);
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image, // Ensure the image property is included
      });
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="item-detail-container">
        <div className="item-detail-left">
          <img
            src={product.image}
            alt={product.name}
            className="item-detail-left-img"
          />
        </div>
        <div className="item-detail-right">
          <h2>{product.name}</h2>
          <p className="detail-description">{product.description}</p>
          <p>From: ${product.price}</p>
          <p>Category: {product.category}</p>
          <ItemCount max={3} initial={1} onAdd={handleAddToCart} />
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ItemDetail;
