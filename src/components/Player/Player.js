import React from "react";
import "./Player.scss";

export default function Player(props) {
  function onClickIncrement() {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  }

  const { name: fullName, score, id, resetOnePlayer } = props;
  return (
    <div>
      <li className="Player">
        <div
          className="percentage_coloring"
          style={{ width: props.score + "%" }}
        />
        <p>
          {props.name} (score: {props.score})
          <button onClick={onClickIncrement}>+</button>
        </p>
      </li>
      <button onClick={() => resetOnePlayer(id)}>Reset</button>
    </div>
  );
}
