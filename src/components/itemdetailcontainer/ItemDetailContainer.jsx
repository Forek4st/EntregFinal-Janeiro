import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../itemdetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(parseInt(id))
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <main className="item-detail">
      {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
    </main>
  );
};

export default ItemDetailContainer;
