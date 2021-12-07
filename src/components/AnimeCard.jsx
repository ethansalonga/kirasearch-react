import React from "react";
import { Link } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  const storeAnime = () => {
    localStorage.setItem("storedAnime", JSON.stringify(anime));
  }

  return (
    <div className="anime__card">
      <Link to={`/search/${anime.mal_id}`} className="anime__link" onClick={storeAnime}>
        <img src={anime.image_url} alt="" className="anime__img" />
        <div className="anime__title">{anime.title}</div>
      </Link>
      <div>
        {anime.type}{" "}
        <span className="anime__episodes">({anime.episodes} eps)</span>
      </div>
      <div>Score: {anime.score}</div>
      <div>{anime.members} members</div>
    </div>
  );
};

export default AnimeCard;
