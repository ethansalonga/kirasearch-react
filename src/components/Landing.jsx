import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LandingImg from "../assets/landing.png";

const Landing = () => {
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

      <form id="landing__form">
        <div className="input__wrapper">
          <input
            type="text"
            placeholder="Search by Title"
            className="landing__input"
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
