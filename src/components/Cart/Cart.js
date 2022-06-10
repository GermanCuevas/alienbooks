import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="divCart">
      <h1>Carrito</h1>
      <div className="divItemsCart">
        {cart.map((prod) => (
          <CartItem key={prod.id} {...prod} />
        ))}
      </div>
      <div>
        {cart.length === 0 ? (
          <div className="divCartEmpty">
            <img
              className="cartEmptyImg"
              src="./images/sad.webp"
              alt="Imagen de carrito vacio"
            />
            <p>Nada por aqui...</p>
          </div>
        ) : (
          <button className="btnCart" onClick={() => clearCart()}>
            CLEAR
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
