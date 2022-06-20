import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase";

import "./ItemDetailContainer.css";

const ItemDetailCotainer = () => {
  const [book, setBook] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(db, "books", productId))
      .then((response) => {
        const product = { id: response.id, ...response.data() };
        setBook(product);
      })
      .catch(console.log);

    /* getBookById(parseInt(productId)).then((response) => {
      setBook(response);
    }); */
  }, [productId]);

  return (
    <>
      <div className="detailContainer">
        {(Object.keys(book).length === 0 && (
          <img src="/gif/loader.gif" alt="gif loader" />
        )) || <ItemDetail {...book} />}
      </div>
    </>
  );
};

export default ItemDetailCotainer;
