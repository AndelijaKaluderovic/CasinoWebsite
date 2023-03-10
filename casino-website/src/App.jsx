import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import GamesList from "./pages/GamesList";

export default function App() {
  return (
    <>
      <Router>
        <Wrapper />
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/games" element={<GamesList />} />
        </Routes>
      </Router>
    </>
  );
}
