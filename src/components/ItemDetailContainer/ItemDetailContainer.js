import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase";

import "./ItemDetailContainer.css";

const ItemDetailCotainer = () => {
  const [book, setBook] = useState({});
  const [loader, setLoader] = useState(true);
  const [bookExist, setBookExist] = useState(true);

  const navigate = useNavigate();

  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(db, "books", productId))
      .then((response) => {
        if (response.data()) {
          const product = { id: response.id, ...response.data() };
          setBook(product);
        } else {
          setBookExist(false);
          setTimeout(() => {
            navigate("../");
          }, 4000);
          throw new Error("Posible error en el id");
        }
      })
      .catch(console.warn)
      .finally(() => setLoader(false));
  }, [productId, navigate]);

  if (loader) {
    return <Loader />;
  }

  if (!bookExist) {
    return (
      <div className="titleNoExist">
        <h2>
          El codigo del libro que busca no esta disponible, o fue modificado.
        </h2>
        <h3>Redirigiendo a la tienda...</h3>
      </div>
    );
  }

  return (
    <>
      <div className="detailContainer">
        <ItemDetail {...book} />
      </div>
    </>
  );
};

export default ItemDetailCotainer;
