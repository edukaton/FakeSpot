import React from "react";
import PropTypes from "prop-types";

const InputsList = ({ onInput, sources, key = "sources" }) => {
  const inputsList = sources.map((val, i) => (
    <input
      type="text"
      value={val}
      onInput={onInput(i)}
      onChange={onInput(i)}
      key={`${key}-${i}`}
    />),
  );
  inputsList.push(
    <input
      type="text"
      onInput={onInput(inputsList.length)}
      onChange={onInput(inputsList.length)}
      value=""
      key={`${key}-${inputsList.length}`}
    />,
  );

  return inputsList;
};

InputsList.propTypes = {
  onInput: PropTypes.func.isRequired,
  sources: PropTypes.array.isRequired,
};

export default InputsList;
