import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

const InputLine = ({
  value, onSourceInput,
}) => (
  <div className={styles.inputLine}>
    <input
      type="url"
      required
      // value={value.source}
      onInput={onSourceInput}
      onChange={onSourceInput}
      placeholder="Wklej źródło..."
    />
  </div>
);

InputLine.propTypes = {
  // value: PropTypes.object.isRequired,
  onSourceInput: PropTypes.func.isRequired,
};

export default InputLine;
