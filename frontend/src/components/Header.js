import React from "react";
import logo from '../images/header-logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();
  const path = location.pathname === "/sign-in" ? "/sign-up" : "/sign-in";
  const title = location.pathname === "/sign-in" ? "Регистрация" : "Вход";

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Место" />
      <div className="header__container">
        {props.loggedIn ? (
          <>
            <span className="header__email">{props.email}</span>
            <Link className="header__link" to="/" style={{color: "#A9A9A9"}} onClick={props.onSignOut}>Выйти</Link>
          </>
        ) : (
          <Link className="header__link" to={path}>{title}</Link>
        )}
      </div>
    </header>
  )
}

export default Header;