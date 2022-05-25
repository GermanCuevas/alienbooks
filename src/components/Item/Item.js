import "./Item.css";

const Item = ({ id, name, price, image, autor }) => {
  console.log(image);
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
    </div>
  );
};
export default Item;
