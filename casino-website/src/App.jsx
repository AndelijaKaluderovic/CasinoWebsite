import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import GamesList from "./pages/GamesList";

export default function App() {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [player, setPlayer] = useState({
    name: "Rebecka Awesome",
    avatar: "images/avatar/rebecka.jpg",
    event: "Last seen gambling on Starburst.",
    password: "secret",
  });

  const fetchGames = async () => {
    const data = await fetch("/mock/mock-data.json");
    const gamesJSON = await data.json();
    setGames(gamesJSON.games);
  };

  const fetchCategories = async () => {
    const data = await fetch("/mock/mock-data.json");
    const categoriesJSON = await data.json();
    setCategories(categoriesJSON.categories);
  };

  useEffect(() => {
    fetchGames();
    fetchCategories();
  }, []);

  return (
    <>
      <Router>
        <Wrapper />
        <Routes>
          <Route exact path="/" element={<Login player={player} />} />
        </Routes>
        <Routes>
          <Route
            path="/games"
            element={
              <GamesList
                player={player}
                games={games}
                categories={categories}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}
