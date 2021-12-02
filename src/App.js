import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`)
        .then(res => res.json());

        console.log(temp.results);
        setAnimeList(temp.results);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/search"
            element={
              <Search
                handleSearch={handleSearch}
                search={search}
                setSearch={setSearch}
                animeList={animeList}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
