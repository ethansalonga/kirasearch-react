import "./index.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AnimeInfo from "./pages/AnimeInfo";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");
  const [topAnime, setTopAnime] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    fetchAnime(search);
  };

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTopAnime(temp.top.slice(0, 9));
  };

  const fetchAnime = async (query) => {
    if (query === "") {
      setAnimeList([]);
    } else {
      const temp = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`
      ).then((res) => res.json());
      
      setAnimeList(temp.results);
    }
  };

  useEffect(() => {
    fetchAnime("");
  }, []);

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleSearch={handleSearch}
                search={search}
                setSearch={setSearch}
                animeList={animeList}
                fetchAnime={fetchAnime}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                handleSearch={handleSearch}
                search={search}
                setSearch={setSearch}
                animeList={animeList}
                setAnimeList={setAnimeList}
                fetchAnime={fetchAnime}
                topAnime={topAnime}
                setTopAnime={setTopAnime}
              />
            }
          />
          <Route
            path="/search/:id"
            element={<AnimeInfo animeList={animeList} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
