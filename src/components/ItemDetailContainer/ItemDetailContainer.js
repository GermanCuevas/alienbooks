import { getBookById } from "../../asyncmock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailCotainer = () => {
  const [book, setBook] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    getBookById(parseInt(productId)).then((response) => {
      console.log(response);
      setBook(response);
    });
  }, [productId]);

  console.log(book);
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
