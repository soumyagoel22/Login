import React, { useState } from "react";

const Login = ({ setIsLoggedIn, setName ,name}) => {
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onHandle = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            autoComplete="new-password"
            required
          />
        </label>
        <br />
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button className="but-login" onClick={onHandle} disabled={!(name && password)}>Login</button>
      </form>
    </>
  );
};

export default Login;
