import { useUser } from "hooks/useUser";
import React from "react";
import { Link, useRoute } from "wouter";
import "./Header.css";

const Header = () => {
  const { isLogged, logout } = useUser();
  const [match] = useRoute("/login");
  const handleLogout = () => {
    logout();
  };

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged ? (
      <button onClick={handleLogout}>Logout</button>
    ) : (
      <>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </>
    );
  };

  const content = match ? null : renderLoginButtons({ isLogged });

  return <header className="App-header">{content}</header>;
};

export default Header;
