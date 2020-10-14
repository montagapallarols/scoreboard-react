import React from "react";

export default function Player(props) {
  return (
    <li>
      <p className="Player">
        {props.name} (score: {props.score})
      </p>
    </li>
  );
}
