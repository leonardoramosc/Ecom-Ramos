import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import CartWidget from "../cartWidget/cartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
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
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
