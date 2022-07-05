import { useState, useEffect, useContext } from "react";
import { useNotification } from "../Notification/Notification";
import { db } from "../../service/firebase";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Context/CartContext";

import "./Form.css";

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
  const [compra, setCompra] = useState(false);
  const navigate = useNavigate();

  const createOrder = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let email2 = e.target.email2.value;

    if (email === email2) {
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
            return Promise.reject({
              type: "out_of_sotck",
              products: outOfStock,
            });
          }
        })
        .then(({ id }) => {
          batch.commit();
          console.log("Compra exi " + id);
          setNotification(
            "order",
            `Compra exitosa: Orden N${id}, \n
            Los detalles seran enviados a su correo electronico`
          );
          setCompra(true);
          console.log(compra);
          clearCart();
        })
        .catch((error) => {
          console.log(error);
          clearCart();
          setNotification("error", "No hay stock de uno de los productos");
        });
    } else {
      setNotification("error", "Los email declarados no coinciden");
    }
  };

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    cart.length === 0 &&
      setTimeout(() => {
        navigate("../");
      }, 3000);
    /* compra === true &&
      setTimeout(() => {
        navigate("../");
      }, 3000); */
  });

  return (
    <>
      <form onSubmit={createOrder} className="formDiv">
        <h1>Pago </h1>
        <h2> Información de contacto </h2>
        <div className="formDiv">
          <input
            id="nameClient"
            placeholder="Nombre y apellido"
            type="text"
            name="name"
            onChange={handleChange}
            className="validateInput"
            required
          />

          <input
            placeholder="Direccion"
            type="text"
            name="addres"
            onChange={handleChange}
            className="validateInput"
            required
          />
          <input
            placeholder="11-2211-2211"
            type="phone"
            name="phone"
            pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
            onChange={handleChange}
            className="validateInput"
            required
          />
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={handleChange}
            className="validateInput"
            required
          />
          <input
            placeholder="Repetir email"
            type="email"
            name="email2"
            className="validateInput"
            required
          />
        </div>
        <h3> Informacion de tarjeta </h3>
        <div className="formDiv">
          <select>
            <option defaultValue>Visa</option>
            <option> Amex </option>
            <option> Mastercard </option>
            <option> Cabal </option>
          </select>
        </div>
        <div className="formDiv">
          <input
            type="text"
            placeholder="Nro Tarjeta"
            minLength="16"
            required
            className="validateInput"
          />

          <input
            type="text"
            placeholder="Vencimiento. Ej 08/25"
            pattern="[0-9]{2}/[0-9]{2}"
            className="validateInput"
            required
          />
        </div>
        <br />

        <button type="submit" className="btnCart">
          Completar Compra
        </button>
      </form>

      {/* <form onSubmit={createOrder} className="formDiv">
        <input
          id="nameClient"
          placeholder="Nombre y apellido"
          type="text"
          name="name"
          onChange={handleChange}
          required
        />
        <input
          placeholder="Mail"
          type="email"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          placeholder="Direccion"
          type="text"
          name="addres"
          onChange={handleChange}
          required
        />
        <input
          placeholder="11-2211-2211"
          type="phone"
          name="phone"
          pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
          onChange={handleChange}
          required
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
      </form> */}
    </>
  );
};

export default Form;
