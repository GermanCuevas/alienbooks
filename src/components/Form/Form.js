import { useState } from "react";
import "./Form.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { useNotification } from "../Notification/Notification";
import { db } from "../../service/firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";

const Form = () => {
  const { cart, totalCart, clearCart } = useContext(CartContext);
  const { setNotification } = useNotification();
  const [buyer, setBuyer] = useState({});

  const createOrder = (e) => {
    e.preventDefault();

    const objOrder = {
      buyer,
      items: cart,
      total: totalCart(),
    };

    const ids = cart.map((prod) => prod.id);

    console.log(ids);

    const outOfStock = [];

    const batch = writeBatch(db);

    const collectionRef = collection(db, "books");

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) =>
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prodCount = cart.find((book) => book.id === doc.id)?.count;

          if (dataDoc.stock >= prodCount) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodCount });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        })
      )
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(db, "orders");
          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({ type: "out_of_sotck", products: outOfStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        console.log("El id de la orden es " + id);
        setNotification("order", `Orden N${id}`);
        clearCart();
      })
      .catch((error) => {
        console.log(error);
        clearCart();
        setNotification("error", `No hay stock de uno de los productos`);
      });

    /*    const collectionReference = collection(db, collectionsName.orders);
    addDoc(collectionReference, objOrder).then(({ id }) => {
      setNotification("order", `Orden N${id}`);
    }); */
  };

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  /*  const handleForm = (e) => {
    e.preventDefault();
    let objData = { buyer, items: cart, total: totalCart() };
    console.log(objData);
  }; */

  return (
    <>
      <form onSubmit={createOrder} className="formDiv">
        <input
          id="nameClient"
          placeholder="Nombre y apellido"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <input
          placeholder="Mail"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="Direccion"
          type="text"
          name="addres"
          onChange={handleChange}
        />
        <input
          placeholder="11-2211-2211"
          type="phone"
          name="phone"
          pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
          onChange={handleChange}
        />
        <input
          placeholder="Comentarios"
          type="text"
          name="coment"
          onChange={handleChange}
        />
        <button type="submit" className="btnCart">
          Enviar
        </button>
        {/* <Notification message={"Notificacion por props"} color={"blue"} /> */}
      </form>
    </>
  );
};

export default Form;
