import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function GamePlay({ gameToPlay }) {
  console.log("gameToPlay: ", gameToPlay);
  // useEffect(() => {
  //   comeon.game.launch(gameToPlay);
  // }, []);
  return (
    <main className="main container">
      <div className="ingame">
        <div className="ui stackable grid centered">
          <div className="three wide column">
            <Link to="/games">
              <div className="ui secondary button inverted">
                <i className="left chevron icon"></i>Back
              </div>
            </Link>
          </div>
          <div className="ten wide column">
            <div id="game-launch"></div>
          </div>
          <div className="three wide column"></div>
        </div>
      </div>
    </main>
  );
}
