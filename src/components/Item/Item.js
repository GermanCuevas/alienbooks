import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, price, image, autor }) => {
  return (
    <div className="cardBook">
      <div className="divCardBook">
        <img
          className="imgCardBook"
          src={image}
          alt={`Portada del libro ${name}`}
        />
      </div>
      <p>Titulo: {name}</p>
      <p>Autor: {autor}</p>
      <p>Precio: ${price}</p>
      <Link className="linkButton" to={`/detail/${id}`}>
        Detalles
      </Link>
    </div>
  );
};
export default Item;
