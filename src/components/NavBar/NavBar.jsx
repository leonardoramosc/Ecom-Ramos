import './NavBar.css';

import CartWidget from '../cartWidget/cartWidget';

const NavBar = () => {

  return (
    <nav className="navbar">
      <h3 className="brand">Every<span>Market</span></h3>
      <ul className="navbar__categories">
        <li className="navbar__categories--item">Celulares</li>
        <li className="navbar__categories--item">Computación</li>
        <li className="navbar__categories--item">Televisores</li>
        <li className="navbar__categories--item">Consolas y Videojuegos</li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;