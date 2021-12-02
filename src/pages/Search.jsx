import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";
import AnimeCard from "../components/AnimeCard";

const Search = (props) => {
  const [topAnime, setTopAnime] = useState([]);

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTopAnime(temp.top.slice(0, 9));
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <>
      <div className="nav__wrapper">
        <nav>
          <div className="navbar">
            <figure>
              <img src={Logo} alt="" className="logo search__logo" />
            </figure>
            <ul className="nav__link--list">
              <li className="nav__link">
                <Link
                  to="/"
                  className="nav__link--anchor-search link__hover-effect link__hover-effect--white"
                >
                  Home
                </Link>
              </li>
              <li className="nav__link">
                <Link
                  to="/search"
                  className="nav__link--anchor-search link__hover-effect link__hover-effect--white"
                >
                  Search anime
                </Link>
              </li>
              <li className="nav__link">
                <Link
                  to="/search"
                  className="nav__link--anchor-search nav__link--anchor-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <h1 className="search__header">Start browsing anime</h1>
        <div className="input__wrapper--search">
          <form id="search__form" onSubmit={props.handleSearch}>
            <input
              type="search"
              placeholder="Search by Title"
              className="search__input"
              value={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
            />
            <button className="btn__input" type="submit">
              <FontAwesomeIcon icon="search" />
            </button>
          </form>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="results__wrapper">
        <aside>
          <nav className="sidebar__nav">
            <h3 className="sidebar__title">Most Popular Anime</h3>
            {topAnime.map((anime) => (
              <Link to="/" className="sidebar__link" key={anime.mal_id}>
                {anime.title}
              </Link>
            ))}
          </nav>
        </aside>

        <section id="search__results">
          <div className="search__row">
            <div className="results__heading--wrapper">
              <h2 className="search__results--header">Search results:</h2>
              <div className="sort__wrapper">
                <h3 className="sort__title">Sort by</h3>
                <select id="filter">
                  <option value="DEFAULT">Default</option>
                  <option value="SCORE">Score</option>
                  <option value="MEMBERS">Members</option>
                </select>
              </div>
            </div>
            <div className="anime__card--wrapper">
              {props.animeList.map((anime) => (
                <AnimeCard anime={anime} key={anime.mal_id} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Search;
