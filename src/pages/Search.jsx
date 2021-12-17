import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";

const Search = (props) => {
  const renderAnime = () => {
    props.fetchAnime(props.search);
  };

  useEffect(() => {
    renderAnime();
  }, []);

  const SortAnime = (sort) => {
    if (sort === "POPULARITY") {
      props.setAnimeList(
        props.animeList.slice().sort((a, b) => b.members - a.members)
      );
    }
    if (sort === "SCORE") {
      props.setAnimeList(
        props.animeList.slice().sort((a, b) => b.score - a.score)
      );
    }
    if (sort === "TITLE") {
      props.setAnimeList(
        props.animeList.slice().sort((a, b) => a.title.localeCompare(b.title))
      );
    }
  };

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
                  onClick={() => props.props.setSearch("")}
                >
                  Search anime
                </Link>
              </li>
              <li className="nav__link">
                <Link
                  to="/search"
                  className="nav__link--anchor-search nav__link--anchor-primary"
                  onClick={props.contactAlert}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <h1 className="search__header">Start browsing anime</h1>
        <div className="input__wrapper--search">
          <div>
            <input
              type="search"
              placeholder="Search by Title"
              className="search__input"
              value={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
              onKeyPress={(event) =>
                event.key === "Enter" && props.handleSearch()
              }
            />
            <button className="btn__input" onClick={() => props.handleSearch()}>
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="results__wrapper">
        <aside>
          <nav className="sidebar__nav">
            <h3 className="sidebar__title">Most Popular Anime</h3>
            {props.topAnime.map((anime) => (
              <Link
                to={`/search/${anime.mal_id}`}
                className="sidebar__link"
                key={anime.mal_id}
                onClick={() =>
                  localStorage.setItem("storedAnime", JSON.stringify(anime))
                }
              >
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
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(e) => SortAnime(e.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="POPULARITY">Popularity</option>
                  <option value="SCORE">Score</option>
                  <option value="TITLE">Title</option>
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
