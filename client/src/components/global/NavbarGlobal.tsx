import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useCategoriaContext } from "../../context/CategoriaContext";
import { useCarritoContext } from "../../context/CarritoContext";
import logoSimple from "../../assets/img/global/logo-simple.webp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./global.scss";

function NavbarGlobal(props: { setShowBuscador: any; showBuscador: boolean }) {
  const { getCarritoCount, setRealoadTotalCarrito, realoadTotalCarrito } =
    useCarritoContext();
  const { getCategorias } = useCategoriaContext();
  const [categorias, setCategorias] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    callGetCategorias();
  }, []);

  useEffect(() => {
    callGetCarritoCount();
    setRealoadTotalCarrito(false);
  }, [realoadTotalCarrito]);

  const isLoged = () => {
    return localStorage.getItem(import.meta.env.VITE_TOKEN_NAME);
  };

  const logout = () => {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
    window.location.href = "/";
  };

  const callGetCategorias = async () => {
    setCategorias(await getCategorias());
  };

  const callGetCarritoCount = async () => {
    setTotal(await getCarritoCount());
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="NavbarGlobal-global">
      <Container>
        <NavLink to="/">
          <img src={logoSimple} alt="SoccerStore" title="home" />
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto contenedor-opt">
            {categorias.length > 0 &&
              categorias.map((categoria, i) => {
                return (
                  <NavLink to={`/categoria/${categoria._id}`} key={i}>
                    {categoria.nombre}
                  </NavLink>
                );
              })}
          </Nav>

          {isLoged() && (
            <div className="user-info">
              <Nav.Link
                className="cart"
                onClick={() => props.setShowBuscador(!props.showBuscador)}
              >
                <span className="search-text">Buscar producto</span>
                <AiOutlineSearch />
              </Nav.Link>
              <Nav.Link href="#" className="cart">
                <AiOutlineShoppingCart />
                {total ? <span className="num-item">{total}</span> : ""}
              </Nav.Link>
              <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
                <NavDropdown.Item href="/account">mis datos</NavDropdown.Item>
                <NavDropdown.Item href="#">mis compras</NavDropdown.Item>
                <NavDropdown.Item onClick={() => logout()}>
                  cerrar sesión
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          )}

          {!isLoged() && (
            <div className="user-info">
              <Nav.Link
                className="cart"
                onClick={() => props.setShowBuscador(!props.showBuscador)}
              >
                <span className="search-text">Buscar producto</span>
                <AiOutlineSearch />
              </Nav.Link>
              <NavLink to={`/login`}>Iniciar sesión</NavLink>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarGlobal;
