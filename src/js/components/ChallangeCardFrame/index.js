import React from "react";

import styles from "./styles.sass";

export default class ChallangeCardFrame extends React.Component {
  render() {
    return (
      <div className={styles.container}>{this.props.children}</div>
    );
  }
}
