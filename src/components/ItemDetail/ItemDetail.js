import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import InputCount from "../InputCount/InputCount";
import { useState } from "react";
import { Link } from "react-router-dom";
const ItemDetail = ({ book }) => {
  const [countType, setCountType] = useState("input");
  const [quantity, setQuantity] = useState(0);

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
            src={book.image}
            alt={`Portada de ` + book.name}
          />
        </div>
        <div className="divInfoBookById">
          <h1>{book.name + " de " + book.autor}</h1>
          <p>{book.description}</p>
          <p>Precio : ${book.price}</p>

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
