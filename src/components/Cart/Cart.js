import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalCart } = useContext(CartContext);

  /*  const updateDocument = () => {
    console.log(cart[0]);
    const id = cart[0].id;

    const docRef = doc(db, "books", id);

    updateDoc(docRef, { stock: 1000 });
  }; */

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
            <p style={{ fontSize: 35, fontWeight: "bolder" }}>
              Nada por aqui...
            </p>
            <Link to="../">
              <button className="btnCart">IR DE COMPRAS !</button>
            </Link>
          </div>
        ) : (
          <>
            <button className="btnCart" onClick={() => clearCart()}>
              BORRAR CARRITO
            </button>

            <div className="divTotal">
              <p>TOTAL: ${totalCart()}</p>
              <Link to="/checkout">
                <button className="btnCart">CREAR ORDEN</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
