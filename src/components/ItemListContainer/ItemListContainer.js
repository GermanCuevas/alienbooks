import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getBooks } from "../../asyncmock";
import { useParams } from "react-router-dom";
import { getBookCategory } from "../../asyncmock";
import TituloFilter from "../TituloFilter/TituloFilter";

const ItemListContainer = (props) => {
  const [books, setBooks] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    setBooks([]);
    categoryId
      ? getBookCategory(categoryId).then((response) => setBooks(response))
      : getBooks().then((response) => {
          setBooks(response);
        });
  }, [categoryId]);

  return (
    <>
      <div className="titleContainer">
        <h1>{props.title}</h1>
        <TituloFilter category={categoryId} />
      </div>
      <div className="cardsContainer">
        {books.length !== 0 ? (
          <ItemList books={books} />
        ) : (
          <div className="divLoader">
            <img className="loader" src="/gif/loader.gif" alt="gif loader" />
          </div>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
