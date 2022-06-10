import "./CartItem.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CartItem = ({ count, id, name, price }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="divItem">
      <h4>{name}</h4>
      <p>Precio: ${price}</p>
      <p>Cantidad : {count}</p>
      <button className="btnCart" onClick={() => removeItem(id)}>
        X
      </button>
    </div>
  );
};

export default CartItem;
