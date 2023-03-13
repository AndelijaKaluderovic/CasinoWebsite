export default function Logout({ handleLogout }) {
  return (
    <nav
      className="logout ui secondary button inverted"
      onClick={() => handleLogout()}
    >
      <i className="left chevron icon"></i>Log Out
    </nav>
  );
}
