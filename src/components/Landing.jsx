import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LandingImg from "../assets/landing.png";

const Landing = (props) => {

  const landingSearch = (e) => {
    e.preventDefault();

    window.location.href = `${window.location.origin}/search`;
  };

  const onSearchChange = () => {
    localStorage.setItem("query", document.querySelector(".landing__input").value)
  }

  return (
    <section id="landing">
      <header>
        <h1 className="header__title">
          The human who searches by using this platform shall{" "}
          <span className="red">Find.</span>
        </h1>
        <h2 className="header__subtitle">
          Find your next anime with <span className="red">KiraSearch</span>
        </h2>
      </header>

      <form id="landing__form" onSubmit={landingSearch}>
        <div className="input__wrapper">
          <input
            type="search"
            placeholder="Search by Title"
            className="landing__input"
            value={props.search}
            onChange={onSearchChange}
          />
          <button className="btn__search" type="submit">
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
      </form>

      <figure className="landing__img">
        <img src={LandingImg} alt="" />
      </figure>
    </section>
  );
};

export default Landing;
