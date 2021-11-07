import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useUser } from "hooks/useUser";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, pushLocation] = useLocation();
  const { login, isLogged, isLoginLoading, isLoginError } = useUser();

  useEffect(() => {
    if (isLogged) {
      pushLocation("/");
      onLogin && onLogin();
    }
  }, [isLogged, pushLocation, onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading && (
        <form className="Login-form" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button className="btn" type="submit">
            Login
          </button>
        </form>
      )}
      {isLoginError && <strong>Invalid credentials</strong>}
    </>
  );
};
export default Login;
