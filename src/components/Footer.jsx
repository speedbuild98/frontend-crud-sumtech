import React from "react";

import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://sumtechlabs.com/">
        <img className="footer__img" src={Logo} alt="Logo SumTech Labs" />
      </a>
      <a href="https://devgallardo.netlify.app/" className="footer__span">
        Challenge Gallardo Lautaro
      </a>
      <p className="footer__p1">
        [HTML - CSS - Javascript - React - Bootstrap]
      </p>
      <p className="footer__p2">
        [Java - Spring - MySQL]
      </p>
    </footer>
  );
};

export default Footer;
