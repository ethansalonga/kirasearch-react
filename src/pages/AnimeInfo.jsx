import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";

const AnimeInfo = () => {
  const { id } = useParams();
  console.log(id);

  let retrievedAnime = localStorage.getItem("storedAnime");
  const anime = JSON.parse(retrievedAnime);

  return (
    <>
      <Nav />
      <div className="anime__body">
        <div className="anime__row">
          <div className="anime__return">
            <Link to="/search" className="return__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/search" className="return__link">
              <h2>Return to search</h2>
            </Link>
          </div>
          <div className="anime__info">
            <figure className="anime__info--figure">
              <img src={anime.image_url} alt="" className="anime__info--img" />
            </figure>
            <div className="anime__info--main">
              <h2 className="anime__info--title">{anime.title}</h2>
              <h3 className="anime__info--episodes">
                {anime.type} ({anime.episodes} episodes)
              </h3>
              <div className="anime__info--para">
                {anime.synopsis}{" "}
                {anime.rank && (
                  <p className="anime__info--rank">Rank #{anime.rank}</p>
                )}
                <a
                  href={anime.url}
                  target="_blank"
                  className="anime__info--link"
                  rel="noreferrer"
                >
                  [More info]
                </a>
              </div>
              <div className="anime__info--mal-data">
                <p>MyAnimeList score: {anime.score}</p>
                <p>MyAnimeList members: {anime.members}</p>
              </div>
              {anime.airing ? (
                <p className="anime__info--airing">Currently Airing</p>
              ) : (
                <p className="anime__info--not-airing">Finished Airing</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeInfo;
