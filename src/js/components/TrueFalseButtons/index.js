import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.sass";

const TrueFalseButtons = ({ onSubmitTrue, onSubmitFalse }) => (
  <div className={styles.container}>
    <div className={styles.buttonContainer}>
      <button className={styles.true} onClick={onSubmitTrue}><span>Prawda</span></button>
    </div>
    <div className={styles.buttonContainer}>
      <button className={styles.false} onClick={onSubmitFalse}><span>Fałsz</span></button>
    </div>
  </div>
);

TrueFalseButtons.propTypes = {
  onSubmitTrue: PropTypes.func.isRequired,
  onSubmitFalse: PropTypes.func.isRequired,
};

export default TrueFalseButtons;
