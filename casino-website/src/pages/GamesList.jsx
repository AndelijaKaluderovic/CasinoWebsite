import NavBar from "../components/NavBar";
import GameCard from "../components/GameCard";
import CategoryCard from "../components/CategoryCard";

export default function GamesList() {
  return (
    <>
      <div className="main container">
        <div className="casino">
          <NavBar />
          <div className="ui grid">
            <div className="twelve wide column">
              <h3 className="ui dividing header">Games</h3>
              <div className="ui relaxed divided game items links"></div>
              <GameCard />
            </div>
            <div className="four wide column">
              <h3 className="ui dividing header">Categories</h3>
              <div className="ui selection animated list category items">
                <CategoryCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
