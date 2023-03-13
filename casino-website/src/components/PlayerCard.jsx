export default function PlayerCard({ player }) {
  return (
    <section className="player item">
      <img className="ui avatar image" src={player.avatar} alt="avatar" />
      <div className="content">
        <header className="header">
          <b className="name">{player.name}</b>
        </header>
        <div className="description event">{player.event}</div>
      </div>
    </section>
  );
}
