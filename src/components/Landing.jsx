import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LandingImg from "../assets/landing.png";

const Landing = (props) => {
  let navigate = useNavigate();

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

      <div className="landing__form">
        <div className="input__wrapper">
          <input
            type="search"
            placeholder="Search by Title"
            className="landing__input"
            value={props.search}
            onChange={(e) => props.props.setSearch(e.target.value)}
            onKeyPress={(event) => event.key === "Enter" && navigate("/search")}
          />
          <button className="btn__search" onClick={() => navigate("/search")}>
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
      </div>

      <figure className="landing__img">
        <img src={LandingImg} alt="" />
      </figure>
    </section>
  );
};

export default Landing;
