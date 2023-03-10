export default function Login({
  username,
  password,
  handleLogin,
  setUsername,
  setPassword,
  loginError,
}) {
  return (
    <div className="main container">
      <div className="login" style={{ display: "block" }}>
        {loginError && <div className="errorMessage">{loginError}</div>}
        <div className="ui grid centered">
          <h3>Player Login</h3>
          <form onSubmit={handleLogin}>
            <div className="fields">
              <div className="required field">
                <div className="ui icon input">
                  <input
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    placeholder="Username"
                  />
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="required field">
                <div className="ui icon input">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <i className="lock icon"></i>
                </div>
              </div>
              <div className="field">
                <div className="ui icon input">
                  <input type="submit" value="Login" />
                  <i className="right chevron icon"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
