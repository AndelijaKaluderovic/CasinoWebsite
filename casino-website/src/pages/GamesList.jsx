import NavBar from "../components/NavBar";
import GameCard from "../components/GameCard";
import CategoryCard from "../components/CategoryCard";

export default function GamesList({
  player,
  games,
  categories,
  handlePlayGame,
  handleLogout,
  handleSearch,
  handleCategories,
}) {
  return (
    <div className="main container">
      <div className="casino">
        <NavBar
          player={player}
          handleLogout={handleLogout}
          handleSearch={handleSearch}
        />
        <main className="ui stackable grid reversed">
          <div className="twelve wide column">
            <h3 className="ui dividing header">Games</h3>
            <div className="ui relaxed divided game items links">
              <GameCard games={games} handlePlayGame={handlePlayGame} />
            </div>
          </div>
          <div className="four wide column">
            <h3 className="ui dividing header">Categories</h3>
            <div className="ui selection animated list category items">
              <CategoryCard
                categories={categories}
                handleCategories={handleCategories}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
