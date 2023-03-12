import PlayerCard from "./PlayerCard";
import Logout from "./Logout";
import Search from "./Search";

export default function NavBar({ player, handleLogout, handleSearch }) {
  return (
    <div className="ui grid stackable centered">
      <div className="twelve wide column">
        <div className="ui list">
          <PlayerCard player={player} />
        </div>
        <Logout handleLogout={handleLogout} />
      </div>
      <div className="four wide column">
        <Search handleSearch={handleSearch} />
      </div>
    </div>
  );
}
