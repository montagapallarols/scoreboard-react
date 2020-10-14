import React from "react";

export default function Player(props) {
  function onClickIncrement() {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  }

  return (
    <li>
      <p className="Player">
        {props.name} (score: {props.score})
        <button onClick={onClickIncrement}>+</button>
      </p>
    </li>
  );
}
