import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import GamesList from "./pages/GamesList";
import GamePlay from "./pages/GamePlay";
import fetchData from "./utils/fetchingHelper.js";

export default function App() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [password, setPassword] = useState("");
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [gameToPlay, setGameToPlay] = useState(
    localStorage.getItem("gameCode") || ""
  );
  const [categories, setCategories] = useState([]);
  const [player, setPlayer] = useState(
    JSON.parse(localStorage.getItem("player")) || {}
  );
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );
  const [loginError, setLoginError] = useState("");

  const handleCredentials = (username) => {
    localStorage.setItem("username", username);
    setUsername(username);
  };

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
    if (loginResponse.status === "success") {
      localStorage.setItem("authenticated", true);
      localStorage.setItem("player", JSON.stringify(loginResponse.player));
      setAuthenticated(true);
      setPlayer(loginResponse.player);
      window.location.href = "/games";
    } else {
      setLoginError(loginResponse.error);
    }
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
    if (logoutResponse.status === "success") {
      setAuthenticated(false);
      setPlayer({});
      localStorage.clear();
      window.location.href = "/";
    } else {
      console.log(logoutResponse.error);
    }
  };

  const handleGameToPlay = (code) => {
    localStorage.setItem("gameCode", code);
    setGameToPlay(code);
    window.comeon?.game?.launch(code);
    window.location.href = `/games/${code}`;
  };

  const handleSearch = (input) => {
    if (input === "") {
      setGames(allGames);
    } else {
      const searchedGames = allGames.filter((game) =>
        game.name.toLowerCase().includes(input)
      );
      setGames(searchedGames);
    }
  };

  const handleCategories = (categoryId) => {
    if (categoryId === 0) {
      setGames(allGames);
    } else {
      const filteredCategories = allGames.filter((game) =>
        game.categoryIds.includes(categoryId)
      );
      setGames(filteredCategories);
    }
  };

  const fetchGames = async () => {
    const gamesData = await fetchData("http://localhost:3001/games", "get");
    setGames(gamesData);
    setAllGames(gamesData);
  };

  const fetchCategories = async () => {
    const categoriesData = await fetchData(
      "http://localhost:3001/categories",
      "get"
    );
    setCategories(categoriesData);
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
            !authenticated ? (
              <Login
                player={player}
                username={username}
                setUsername={handleCredentials}
                setPassword={setPassword}
                loginError={loginError}
                password={password}
                handleLogin={handleLogin}
              />
            ) : (
              <Navigate to="/games" />
            )
          }
        />
        <Route
          path="/games"
          element={
            authenticated ? (
              <GamesList
                player={player}
                games={games}
                categories={categories}
                handleSearch={handleSearch}
                handleCategories={handleCategories}
                handleGameToPlay={handleGameToPlay}
                handleLogout={handleLogout}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/games/:code"
          element={
            authenticated ? (
              <GamePlay gameToPlay={gameToPlay} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}
