import React, { useState } from "react";

function Square({ value }) {
  // eslint-disable-next-line
  const [count, setValue] = useState(value);

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {count}
    </button>
  );
}

export default function Board() {
  return (
    <React.Fragment>
      <div className="board-row">
        <Square value={null} />
        <Square value={null} />
        <Square value={null} />
      </div>
      <div className="board-row">
        <Square value={null} />
        <Square value={null} />
        <Square value={null} />
      </div>
      <div className="board-row">
        <Square value={null} />
        <Square value={null} />
        <Square value={null} />
      </div>
    </React.Fragment>
  );
}
