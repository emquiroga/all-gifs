import { useUser } from "hooks/useUser";
import React from "react";
import { Link } from "wouter";
import "./Header.css";

const Header = () => {
  //   const isLogged = false;
  const { isLogged, logout } = useUser();
  const handleLogout = () => {
    logout();
  };
  return (
    <header className="App-header">
      {isLogged ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </header>
  );
};

export default Header;
