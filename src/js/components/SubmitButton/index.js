import React from "react";

import styles from "./styles.sass";

export default class Component extends React.Component {
  render() {
    return (
      <div className="flex justify-center">
        <button className={styles.submit} type="submit">Wyślij <i className="material-icons">keyboard_arrow_right</i></button>
      </div>
    );
  }
}
