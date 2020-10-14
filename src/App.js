import React from "react";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import "./App.scss";

function App() {
  return (
    <div>
      <Title />
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
