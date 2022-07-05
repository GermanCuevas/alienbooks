import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TituloFilter from "../TituloFilter/TituloFilter";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase";

const ItemListContainer = (props) => {
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(true);

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
      .catch(console.log)
      .finally(() => setLoader(false));
  }, [categoryId]);

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <div className="titleContainer">
        <h1>{props.title}</h1>
        <TituloFilter category={categoryId} />
      </div>
      <div className="cardsContainer">
        <ItemList books={books} />
      </div>
    </>
  );
};

export default ItemListContainer;
