import PlayerCard from "./PlayerCard";
import Logout from "./Logout";
import Search from "./Search";

export default function NavBar({ player, handleLogout, handleSearch }) {
  return (
    <header className="ui grid stackable centered">
      <div className="twelve wide column">
        <section className="ui list">
          <PlayerCard player={player} />
        </section>
        <Logout handleLogout={handleLogout} />
      </div>
      <aside className="four wide column">
        <Search handleSearch={handleSearch} />
      </aside>
    </header>
  );
}
