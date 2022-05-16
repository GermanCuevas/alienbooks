import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src="/icons/alien64.png" />
      </div>
      <h1 className="titleNavBar">Alien Books</h1>
      <ul className="list">
        <li>Tienda</li>
        <li>Contacto</li>
        <li>Sobre nosotros</li>
      </ul>
    </nav>
  );
};

export default NavBar;
