import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <div className="anime__card">
      <img src={anime.image_url} alt="" className="anime__img" />
      <div className="anime__title">{anime.title}</div>
      <div className="anime__info">
        {anime.type}{" "}
        <span className="anime__episodes">({anime.episodes} eps)</span>
      </div>
      <div>Score: {anime.score}</div>
      <div>{anime.members} members</div>
    </div>
  );
};

export default AnimeCard;
