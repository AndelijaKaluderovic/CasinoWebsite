import PlayerCard from "./PlayerCard";

export default function NavBar({ player }) {
  return (
    <>
      <div className="ui grid centered">
        <div className="twelve wide column">
          <div className="ui list">
            <PlayerCard player={player} />
          </div>
          <div className="logout ui left floated secondary button inverted">
            <i className="left chevron icon"></i>Log Out
          </div>
        </div>
        <div className="four wide column">
          <div className="search ui small icon input ">
            <input type="text" placeholder="Search Game" />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
    </>
  );
}
