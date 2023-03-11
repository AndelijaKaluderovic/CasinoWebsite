import NavBar from "../components/NavBar";
import GameCard from "../components/GameCard";
import CategoryCard from "../components/CategoryCard";

export default function GamesList({
  player,
  games,
  categories,
  handleGameToPlay,
  handleLogout,
}) {
  return (
    <div className="main container">
      <div className="casino">
        <NavBar player={player} handleLogout={handleLogout} />
        <div className="ui grid">
          <div className="twelve wide column">
            <h3 className="ui dividing header">Games</h3>
            <div className="ui relaxed divided game items links">
              <GameCard games={games} handleGameToPlay={handleGameToPlay} />
            </div>
          </div>
          <div className="four wide column">
            <h3 className="ui dividing header">Categories</h3>
            <div className="ui selection animated list category items">
              <CategoryCard categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
