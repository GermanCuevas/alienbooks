import { getBookById } from "../../asyncmock";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailCotainer = () => {
  const [book, setBook] = useState({});

  useEffect(() => {
    getBookById().then((response) => {
      console.log(response);
      setBook(response);
    });
  }, []);

  return (
    <>
      <div className="detailContainer">
        <ItemDetail book={book} />
      </div>
    </>
  );
};

export default ItemDetailCotainer;
