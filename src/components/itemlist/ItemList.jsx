/* eslint-disable react/prop-types */
import Item from "../item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="list-group">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;
