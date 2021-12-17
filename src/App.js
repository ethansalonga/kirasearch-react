import "./index.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AnimeInfo from "./pages/AnimeInfo";
import axios from "axios";

function App() {
  const [topAnime, setTopAnime] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const {
      data: { top },
    } = await axios.get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`);
    setTopAnime(top.slice(0, 9));
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  const fetchAnime = async (query) => {
    if (query === "") {
      setAnimeList([]);
    } else {
      const {
        data: { results },
      } = await axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`
      );
      setAnimeList(results);
    }
  };

  const handleSearch = () => {
    fetchAnime(search);
  };

  useEffect(() => {
    fetchAnime("");
  }, []);

  const contactAlert = () => {
    alert("Haven't implemented this yet!");
  };

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
                contactAlert={contactAlert}
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
                contactAlert={contactAlert}
              />
            }
          />
          <Route
            path="/search/:id"
            element={<AnimeInfo animeList={animeList} contactAlert={contactAlert} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
