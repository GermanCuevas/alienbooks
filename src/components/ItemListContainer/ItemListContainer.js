import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TituloFilter from "../TituloFilter/TituloFilter";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase";

const ItemListContainer = (props) => {
  const [books, setBooks] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(db, "books"), where("category", "==", categoryId))
      : collection(db, "books");

    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setBooks(products);
      })
      .catch(console.log);
    /*  setBooks([]);

    categoryId
      ? getBookCategory(categoryId).then((response) => setBooks(response))
      : getBooks().then((response) => {
          setBooks(response);
        }); */
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
