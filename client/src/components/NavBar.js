import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { Box, Heading } from "@chakra-ui/core";

const NavBar = () => {
  const { value, toggleMode } = useDarkMode();
  return (
    <Box className="navbar">
      <Heading>Female World Cup Players</Heading>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={value ? "toggle toggled" : "toggle"}
        />
      </div>
    </Box>
  );
};

export default NavBar;
