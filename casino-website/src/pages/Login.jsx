import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="main container">
        <div className="login" style={{ display: "block" }}>
          <div className="ui grid centered">
            <form onSubmit={() => handleSubmit()}>
              <div className="fields">
                <div className="required field">
                  <div className="ui icon input">
                    <input
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
    </>
  );
}