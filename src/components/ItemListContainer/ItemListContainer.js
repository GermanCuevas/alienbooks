import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getBooks } from "../../asyncmock";

const ItemListContainer = (props) => {
  const [books, setBooks] = useState([]);
  const waiting = "Esperando...";

  useEffect(() => {
    getBooks()
      .then((response) => {
        setBooks(response);
      })
      .catch((error) => {
        console.warn(error);
        setBooks([]);
      });
  }, []);

  return (
    <>
      <div className="titleContainer">
        <h1>{props.title}</h1>
      </div>
      <div className="cardsContainer">
        {books.length !== 0 ? <ItemList books={books} /> : waiting}
      </div>
    </>
  );
};

export default ItemListContainer;
