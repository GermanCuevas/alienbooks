import "./CartWidget.css";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  const quantity = getQuantity();

  return (
    <>
      {quantity !== 0 && (
        <Link className="linkShop" to="/cart">
          <div className="boxShop">
            <img src="../icons/shop64.png" alt="Shopping cart" />
            <span className="numberShop">{quantity}</span>
          </div>
        </Link>
      )}
    </>
  );
};

export default CartWidget;
