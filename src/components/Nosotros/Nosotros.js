import React from "react";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="divNosotros">
      <div className="parNosotros">
        <h1>Quienes somos</h1>
        <p>
          Somos Alien Books Argentina, pionera en la edición y comercialización
          de libros de manera online. Estamos vigentes y en constante
          crecimiento desde hace poco mas de 30 años. Registramos el ISBN número
          2 y nuestro futuro esta complementado con la formación de proximas
          generaciones, tanto de Argentina como también de todos los países de
          habla hispana. Dentro de nuestro catálogo contamos con autores de
          renombre nacional e internacional. <br />
          Nuestra biblioteca esta con constante crecimiento!{" "}
          <b>
            Gracias por confiar en nosotros! Y no lo olvides, cree en ti mismo !
          </b>
        </p>
      </div>
      <div className="divImgNosotros">
        <img
          className="imgNosotros"
          src="./images/alienReading.webp"
          alt="Alien leyendo un libro"
        />
      </div>
    </div>
  );
};

export default Nosotros;
