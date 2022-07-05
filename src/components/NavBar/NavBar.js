import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="logo">
          <img src="/icons/alien64.png" alt="Logo de alien" />
        </div>
        <h1 className="titleNavBar">Alien Books</h1>
        <ul className="list">
          <ul className="listCategory">
            <li className="listCategoryFirstLi">Categorias</li>
            <div className="listHide itemHide">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "itemLink linkSize colorActiveLink"
                    : "itemLink linkSize "
                }
                to="/category/suspenso"
              >
                Suspenso
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "itemLink linkSize colorActiveLink"
                    : "itemLink linkSize "
                }
                to="/category/cienciaficcion"
              >
                Ciencia Ficcion
              </NavLink>
            </div>
          </ul>
          <NavLink
            className={({ isActive }) =>
              isActive ? "linkSize colorActiveLink" : "linkSize "
            }
            to="/"
          >
            Tienda
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "linkSize colorActiveLink" : "linkSize "
            }
            to="/nosotros"
          >
            Nosotros
          </NavLink>
        </ul>
        <CartWidget />
      </nav>
      <div className="categoryDiv"></div>
    </header>
  );
};

export default NavBar;
