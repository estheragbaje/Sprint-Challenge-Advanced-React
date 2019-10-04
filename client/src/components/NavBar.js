import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const NavBar = () => {
  const { value, toggleMode } = useDarkMode();
  return (
    <nav className="navbar">
      <h1>World Cup Female Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={value ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default NavBar;
