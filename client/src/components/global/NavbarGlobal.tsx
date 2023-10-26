import logoSimple from "../../assets/img/logo-simple.webp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./global.scss";

function NavbarGlobal() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="NavbarGlobal-global">
      <Container>
        <img src={logoSimple} alt="SoccerStore" title="home" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#link">Camisetas</Nav.Link>
            <Nav.Link href="#link">Shorts</Nav.Link>
            <Nav.Link href="#link">Ofertas</Nav.Link>

            <NavDropdown title="Calzado" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Botines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Zapatillas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarGlobal;
