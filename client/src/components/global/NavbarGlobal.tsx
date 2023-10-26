import logoSimple from "../../assets/img/global/logo-simple.webp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./global.scss";

function NavbarGlobal() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="NavbarGlobal-global">
      <Container>
        <img src={logoSimple} alt="SoccerStore" title="home" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Camisetas</Nav.Link>
            <Nav.Link href="#">Shorts</Nav.Link>
            <Nav.Link href="#">Botines</Nav.Link>
            <Nav.Link href="#">Ofertas</Nav.Link>
          </Nav>

          <div className="user-info">
            <Nav.Link href="#" className="cart">
              <AiOutlineShoppingCart />
              <span>3</span>
            </Nav.Link>
            <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">mis compras</NavDropdown.Item>
              <NavDropdown.Item href="#">cerrar sesión</NavDropdown.Item>
            </NavDropdown>
          </div>
          {/* <Nav.Link href="#">Iniciar sesión</Nav.Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarGlobal;
