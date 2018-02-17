import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.sass";

const TrueFalseButtons = ({ onSubmitTrue, onSubmitFalse, selected }) => (
  <div className={styles.container}>
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.true} ${(selected === true) ? styles.checked : ""}`}
        onClick={onSubmitTrue}
      >
        <span>Prawda</span>
      </button>
    </div>
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.false} ${(selected === false) ? styles.checked : ""}`}
        onClick={onSubmitFalse}
      >
        <span>Fałsz</span>
      </button>
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
