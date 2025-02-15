/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ItemList from "../itemlist/ItemList.jsx";
import { getProducts } from "../../asyncMock.js";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="item-container">
      <ItemList products={products} />
    </main>
  );
};

export default ItemListContainer;
