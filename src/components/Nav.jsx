import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = (props) => {

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
              onClick={() => props.props.setSearch("")}
            >
              Search anime
            </Link>
          </li>
          <li className="nav__link">
            <Link
              to=""
              className="nav__link--anchor nav__link--anchor-primary"
              onClick={props.props.contactAlert}
            >
              Contact
            </Link>
          </li>
          <button className="btn__menu" onClick={props.props.openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={props.props.closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={props.props.closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/search" className="menu__link" onClick={props.props.closeMenu}>
                Search
              </Link>
            </li>
            <li className="menu__list">
              <Link
                to=""
                className="menu__link"
                onClick={props.props.contactAlert}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
