import React from "react";
import "./App.css";
import PlayerCard from "./components/PlayerCard";
import PlayerCard2 from "./components/PlayerCard2";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <PlayerCard /> */}
      <NavBar />
      <PlayerCard2 />
    </div>
  );
}

export default App;
