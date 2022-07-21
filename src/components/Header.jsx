import React, { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";

import Logo from "../assets/Logo.png";
import Menu from "@iconscout/react-unicons/icons/uil-ellipsis-v";
import Plus from "@iconscout/react-unicons/icons/uil-plus-circle";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="header">
      <nav
        className={
          !nav
            ? "header__nav header__nav--open"
            : "header__nav header__nav--closed"
        }
      >
        <a className="header__nav-title" href="http://localhost:3000/">
          <img className="header__nav-img" src={Logo} alt="Logo SumTech Labs" />
        </a>
        <Menu
          onClick={handleClick}
          className={
            !nav
              ? "header__nav-icon"
              : "header__nav-icon header__nav-icon--open"
          }
        />
      </nav>
      <div
        className={
          !nav
            ? "header__menu header__menu--hidden"
            : "header__menu header__menu--show"
        }
      >
        <div
          className={
            !nav
              ? "header__menu__content header__menu-content--hidden"
              : "header__menu__content header__menu-content--show"
          }
        >
          <span className="header__menu__content-title">
            Store Managment System
          </span>
          <Link
            onClick={handleClick}
            className="header__menu__content-link"
            to="/"
          >
            Dashboard
          </Link>
          <Link
            onClick={handleClick}
            className="header__menu__content-link"
            to="/customers"
          >
            Customers
          </Link>
          <Link
            onClick={handleClick}
            className="header__menu__content-link"
            to="/products"
          >
            Products
          </Link>
          <Link
            onClick={handleClick}
            className="header__menu__content-link"
            to="/operations"
          >
            Operations
          </Link>
          <button
            onClick={handleClick}
            className="header__menu__content-button"
          >
            <Plus />
            <Link
              className="header__menu__content-button-link"
              to="/add-operation"
            >
              Add operation
            </Link>
          </button>
          <Footer />
        </div>
      </div>
    </header>
  );
};

export default Header;
