import './NavBar.css';

import CartWidget from '../cartWidget/cartWidget';

const NavBar = () => {

  return (
    <nav className="navbar">
      <h3 className="brand">Every<span>Market</span></h3>
      <ul className="navbar__categories">
        <li className="navbar__categories--item">Ropa</li>
        <li className="navbar__categories--item">Electrodomésticos</li>
        <li className="navbar__categories--item">Tecnología</li>
        <li className="navbar__categories--item">Herramientas</li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;