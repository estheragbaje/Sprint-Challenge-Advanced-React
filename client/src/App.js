import React from "react";
import "./App.css";
import PlayerCard from "./components/PlayerCard";
import PlayerCard2 from "./components/PlayerCard2";
import NavBar from "./components/NavBar";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box className="App">
        {/* <PlayerCard /> */}
        <NavBar />
        <PlayerCard2 />
      </Box>
    </ThemeProvider>
  );
}

export default App;
