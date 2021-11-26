import "./NavBar.css";

import CartWidget from "../cartWidget/cartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="navbar">
      <Link to="/" className="brand-link">
        <h3 className="brand">
          Every<span>Market</span>
        </h3>
      </Link>
      <ul className="navbar__categories">
        <li className="navbar__categories--item">
          <NavLink to="/category/celulares">
            Celulares
          </NavLink>
        </li>
        <li className="navbar__categories--item">
          <NavLink to="/category/computacion">
            Computación
          </NavLink>
        </li>
        <li className="navbar__categories--item">
          <NavLink to="/category/televisores">
            Televisores
          </NavLink>
        </li>
        <li className="navbar__categories--item">
          <NavLink to="/category/videojuegos">
            Consolas y Videojuegos
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
