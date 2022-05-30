import "./ItemDetail.css";
const ItemDetail = ({ book }) => {
  console.log(book);
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
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
