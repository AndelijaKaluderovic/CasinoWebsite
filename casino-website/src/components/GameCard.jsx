export default function GameCard({ games, handleGameToPlay }) {
  return (
    <>
      {games.map((game, index) => (
        <article key={index} className="game item">
          <div className="ui small image">
            <img src={game.icon} alt="game-icon" />
          </div>
          <div className="content">
            <header className="header">
              <b className="name">{game.name}</b>
            </header>
            <div className="description">{game.description}</div>
            <div className="extra">
              <div
                className="play ui right floated secondary button inverted"
                onClick={() => handleGameToPlay(game.code)}
              >
                Play
                <i className="right chevron icon"></i>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
