import React from "react";

const LifeLinesDisplayed = ({ lifeLines, lifeLinesUsed }) => {
  const elements = lifeLinesUsed.map((val) => {
    const line = lifeLines.find(
      ({ id }) => (id === val),
    );

    return <div key={`lifeline-${line.id}`}>{ line.text }</div>;
  });
  return (
    <div>
      {elements}
    </div>
  );
};

export default LifeLinesDisplayed;
