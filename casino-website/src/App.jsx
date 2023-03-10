import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <>
      <Router>
        <Wrapper />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
