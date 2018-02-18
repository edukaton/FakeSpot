import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.sass";

const TrueFalseButtons = ({ onSubmitTrue, onSubmitFalse, selected }) => (
  <div className={styles.container}>
    <div className={styles.buttonContainer}>
      <label
        className={`${styles.true} ${(selected === true) ? styles.checked : ""}`}
        onClick={onSubmitTrue}
        type="button"
      >
        <input type="radio" name="asd" value="true" required />
        <span>Prawda</span>
      </label>
    </div>
    <div className={styles.buttonContainer}>
      <label
        className={`${styles.false} ${(selected === false) ? styles.checked : ""}`}
        onClick={onSubmitFalse}
      >
        <input type="radio" name="asd" value="false" required />
        <span>Fałsz</span>
      </label>
    </div>
  </div>
);

TrueFalseButtons.propTypes = {
  onSubmitTrue: PropTypes.func.isRequired,
  onSubmitFalse: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

TrueFalseButtons.defaultProps = {
  selected: null,
};

export default TrueFalseButtons;
