import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src="/icons/alien64.png" alt="Logo de alien" />
      </div>

      <h1 className="titleNavBar">Alien Books</h1>
      <ul className="list">
        <li>Tienda</li>
        <li>Contacto</li>
        <li>Sobre nosotros</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
