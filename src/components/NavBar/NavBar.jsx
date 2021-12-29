import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import CartWidget from "../cartWidget/cartWidget";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../cartContext";

const NavBar = () => {
  const [cartItemstotal, setCartItemsTotal] = useState(0);

  const { cartItems } = useContext(cartContext);

  useEffect(() => {
    let temp = 0;
    cartItems.items.forEach((i) => (temp += i.quantity));

    setCartItemsTotal(temp);
  }, [cartItems]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="brand">
          <Link to="/" className="brand-link">
            Every<span>Market</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">

            {cartItemstotal > 0 && (
              <NavLink
                className="navbar__categories--item cart__mobile"
                to="/cart"
              >
                {`Carrito de compras (${cartItemstotal})`}
              </NavLink>
            )}

            <NavLink
              className="navbar__categories--item"
              to="/category/celulares"
            >
              Celulares
            </NavLink>
            <NavLink
              className="navbar__categories--item"
              to="/category/computacion"
            >
              Computación
            </NavLink>
            <NavLink
              className="navbar__categories--item"
              to="/category/televisores"
            >
              Televisores
            </NavLink>
            <NavLink
              className="navbar__categories--item"
              to="/category/videojuegos"
            >
              Videojuegos
            </NavLink>
          </Nav>
          {/* <Nav>
            <CartWidget />
          </Nav> */}
        </Navbar.Collapse>
      </Container>
      <Link to="/cart" className="cart__link">
        <CartWidget />
      </Link>
    </Navbar>
  );
};

export default NavBar;
