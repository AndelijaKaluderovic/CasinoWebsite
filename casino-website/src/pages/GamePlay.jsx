import { Link } from "react-router-dom";

export default function GamePlay({ gameToPlay }) {
  console.log("gameToPlay: ", gameToPlay);
  comeon.gameToPlay.launch(gameToPlay.code);
  return (
    <div className="main container">
      <div className="ingame">
        <div className="ui grid centered">
          <div className="three wide column">
            <Link to="/games">
              <div className="ui right floated secondary button inverted">
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
    </div>
  );
}
