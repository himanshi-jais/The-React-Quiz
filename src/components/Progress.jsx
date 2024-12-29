import React from "react";

function Progress({ index, numQuestion, points, maxPoint, answer }) {
  return (
    <header className="progress">
        <progress max={numQuestion} value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong>/ {numQuestion}{" "}
      </p>
      <p>
        Points <strong>{points}</strong> / {maxPoint}
      </p>
    </header>
  );
}

export default Progress;
