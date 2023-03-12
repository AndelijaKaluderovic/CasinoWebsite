export default function Logout({ handleLogout }) {
  return (
    <div
      className="logout ui secondary button inverted"
      onClick={() => handleLogout()}
    >
      <i className="left chevron icon"></i>Log Out
    </div>
  );
}
