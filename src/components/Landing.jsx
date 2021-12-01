import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LandingImg from "../assets/landing.png";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <h1 class="header__title">
          The human who searches by using this platform shall{" "}
          <span class="red">Find.</span>
        </h1>
        <h2 class="header__subtitle">
          Find your next anime with <span class="red">KiraSearch</span>
        </h2>
      </header>

      <form id="landing__form" onsubmit="">
        <div class="input__wrapper">
          <input
            type="text"
            placeholder="Search by Title"
            class="landing__input"
          />
          <button class="btn__search" type="submit">
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
      </form>

      <figure class="landing__img">
        <img src={LandingImg} alt="" />
      </figure>
    </section>
  );
};

export default Landing;
