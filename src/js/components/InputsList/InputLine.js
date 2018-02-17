import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const InputLine = ({
  value, onSourceInput, onTextInput,
}) => (
  <div className={styles.inputLine}>
    <input
      type="text"
      value={value.source}
      onInput={onSourceInput}
      onChange={onSourceInput}
      placeholder="Wklej źródło..."
    />
    <textarea
      type="text"
      value={value.text}
      onInput={onTextInput}
      onChange={onTextInput}
      placeholder="Wklej fragment..."
    />
  </div>
);

InputLine.propTypes = {
  value: PropTypes.object.isRequired,
  onTextInput: PropTypes.func.isRequired,
  onSourceInput: PropTypes.func.isRequired,
};

export default InputLine;
