import React from "react";
import { connect } from "react-redux";

import styles from "./styles.sass";

@connect()
export default class Splash extends React.Component {
  onClick = () => {
    this.props.dispatch({ type: "SET_STATE", payload: "playing" });
  }

  render() {
    return (
      <div className="flex items-center justify-center h-full">
        <button className={styles.button} onClick={this.onClick}>ZACZYNAMY!</button>
      </div>
    );
  }
}
