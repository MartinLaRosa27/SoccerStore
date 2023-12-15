import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useCarritoContext } from "../../../context/CarritoContext";
import { useFavoritoContext } from "../../../context/FavoritosContext";
import { GoogleLogout } from "react-google-login";
import "./header.scss";

function HeaderGlobal(props: { setShowBuscador: any; showBuscador: any }) {
  const { getCarritoCount, setRealoadTotalCarrito, realoadTotalCarrito } =
    useCarritoContext();
  const { getFavoritoCount, setRealoadTotalFavoritos, realoadTotalFavoritos } =
    useFavoritoContext();
  const [total, setTotal] = useState<number>(0);
  const [totalFavoritos, setTotalFavoritos] = useState<number>(0);
  let history = useHistory();
  const navRef = useRef<any>();

  useEffect(() => {
    if (isLoged()) {
      callGetCarritoCount();
      setRealoadTotalCarrito(false);
    }
  }, [realoadTotalCarrito]);

  useEffect(() => {
    if (isLoged()) {
      callGetFavoritoCount();
      setRealoadTotalFavoritos(false);
    }
  }, [realoadTotalFavoritos]);

  const callGetCarritoCount = async () => {
    setTotal(await getCarritoCount());
  };

  const callGetFavoritoCount = async () => {
    setTotalFavoritos(await getFavoritoCount());
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const isLoged = () => {
    return localStorage.getItem(import.meta.env.VITE_TOKEN_NAME);
  };

  const handleClickBuscador = () => {
    showNavbar();
    props.setShowBuscador(!props.showBuscador);
  };

  const onSuccessLogout = () => {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
    window.location.href = "/";
  };

  return (
    <>
      <header id="Header-global">
        <NavLink to={`/`} className="titulo">
          <h3>SoccerStore</h3>
        </NavLink>

        <nav ref={navRef}>
          <NavLink to={`/categoria/1`}>camisetas</NavLink>
          <NavLink to={`/categoria/2`}>shorts</NavLink>
          <NavLink to={`/categoria/3`}>botines</NavLink>
          {isLoged() ? (
            <>
              <a onClick={() => history.push(`/account`)}>Mis datos</a>
              <a onClick={() => history.push(`/mis-compras`)}>Mis compras</a>
              <a className="cart" onClick={() => handleClickBuscador()}>
                <span className="search-text">Buscar producto</span>
                <AiOutlineSearch />
              </a>
              <a onClick={() => history.push(`/favoritos`)} className="cart">
                <span className="search-text">Favoritos</span>
                <IoMdHeartEmpty />
                {totalFavoritos ? (
                  <span className="num-item">{totalFavoritos}</span>
                ) : (
                  ""
                )}
              </a>
              <a onClick={() => history.push(`/carrito`)} className="cart">
                <span className="search-text">Mi Carrito</span>
                <AiOutlineShoppingCart />
                {total ? <span className="num-item">{total}</span> : ""}
              </a>

              <GoogleLogout
                clientId={import.meta.env.VITE_GOOGLE_CLIENT}
                buttonText="Cerrar sesión"
                onLogoutSuccess={onSuccessLogout}
                className="btn-salir"
              />
            </>
          ) : (
            <>
              <a onClick={() => handleClickBuscador()}>Buscar producto</a>
              <NavLink to={`/login`}>Iniciar sesión</NavLink>
            </>
          )}

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div className="oferta-navbar">
        ¡15% OFF SUSCRIBIÉNDOTE AL NEWSLETTER!
      </div>
    </>
  );
}

export default HeaderGlobal;
