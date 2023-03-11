import PlayerCard from "./PlayerCard";
import Logout from "./Logout";

export default function NavBar({ player, handleLogout }) {
  return (
    <div className="ui grid centered">
      <div className="twelve wide column">
        <div className="ui list">
          <PlayerCard player={player} />
        </div>
        <Logout handleLogout={handleLogout} />
      </div>
      <div className="four wide column">
        <div className="search ui small icon input ">
          <input type="text" placeholder="Search Game" />
          <i className="search icon"></i>
        </div>
      </div>
    </div>
  );
}
