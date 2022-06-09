import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import InputCount from "../InputCount/InputCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
const ItemDetail = ({ image, name, description, price, autor }) => {
  const [countType, setCountType] = useState("input");
  const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext);

  const Count = countType === "input" ? InputCount : ItemCount;

  const onAdd = (count) => {
    setQuantity(count);
  };

  return (
    <>
      <div className="cardDetail">
        <div className="divBookById">
          <img
            className="imageBookById"
            src={image}
            alt={`Portada de ` + name}
          />
        </div>
        <div className="divInfoBookById">
          <h1>{name + " de " + autor}</h1>
          <p>{description}</p>
          <p>Precio : ${price}</p>

          {quantity > 0 ? (
            <Link className="linkShop" to={"./cart"}>
              Al Carrito
            </Link>
          ) : (
            <>
              <button
                onClick={() =>
                  setCountType(countType === "input" ? "button" : "input")
                }
                className="btnFormat"
              >
                Formato de Contador
              </button>
              <Count initCount={1} stock={3} onAdd={onAdd} />
            </>
          )}
          {/* {toCart && <Link to={"./cart"}>Carrito</Link>} */}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
