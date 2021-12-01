import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="navbar">
        <figure>
          <img src={Logo} alt="" className="logo" />
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <Link
              to="/"
              className="
                nav__link--anchor
                link__hover-effect link__hover-effect--black
              "
            >
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to="/search"
              className="
                nav__link--anchor
                link__hover-effect link__hover-effect--black
              "
            >
              Search anime
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="nav__link--anchor nav__link--anchor-primary">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
