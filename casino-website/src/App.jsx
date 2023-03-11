import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import GamesList from "./pages/GamesList";
import GamePlay from "./pages/GamePlay";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(undefined);
  const [categories, setCategories] = useState([]);
  const [player, setPlayer] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const loginResponse = await data.json();
    // setPlayer(loginResponse.player);
    // setLoggedIn(true);
    loginResponse.status === "success"
      ? console.log("successfully logged in and add info to localStorage")
      : console.log("please try again");
  };

  const handleLogout = async () => {
    const data = await fetch("http://localhost:3001/logout", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    });
    const logoutResponse = await data.json();
    console.log("logoutResponse: ", logoutResponse);
    logoutResponse.status === "success"
      ? console.log("successfully logged out and change info to localStorage")
      : console.log("please try again");
  };

  const handleGameToPlay = (code) => {
    const gameToPlay = games.find((x) => x.code === code);
    console.log("gameToPlay: ", gameToPlay);
    setGame(gameToPlay);
  };

  const fetchGames = async () => {
    const data = await fetch("http://localhost:3001/games", {
      method: "get",
    });
    const gamesJSON = await data.json();
    setGames(gamesJSON);
  };

  const fetchCategories = async () => {
    const data = await fetch("http://localhost:3001/categories", {
      method: "get",
    });
    const categoriesJSON = await data.json();
    setCategories(categoriesJSON);
  };

  useEffect(() => {
    fetchGames();
    fetchCategories();
  }, []);

  return (
    <Router>
      <Wrapper />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Login
              player={player}
              username={username}
              setUsername={setUsername}
              setPassword={setPassword}
              password={password}
              handleLogin={handleLogin}
            />
          }
        />
        <Route
          path="/games"
          element={
            <GamesList
              player={player}
              games={games}
              categories={categories}
              handleGameToPlay={handleGameToPlay}
              handleLogout={handleLogout}
            />
          }
        />
        <Route path="/games/:code" element={<GamePlay game={game} />} />
      </Routes>
    </Router>
  );
}
