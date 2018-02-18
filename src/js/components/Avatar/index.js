import React from "react";

import styles from "./styles.sass";

export default class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      easteregg: false,
    };
  }

  changeImg = () => {
    this.setState({
      easteregg: !this.state.easteregg,
    });
  }

  render() {
    return (
      <div className={styles.avatar + (this.state.easteregg ? ` ${styles.easteregg}` : "")} onDoubleClick={this.changeImg}>
        <img src={!this.state.easteregg ? this.props.avatar : "/fox.gif"} alt="avatar" />
        { this.state.easteregg ? (
          <audio
            src="/fox.mp3"
            autoPlay
            onEnded={this.changeImg}
          >
            Your browser does not support the <code>audio</code> element.
          </audio>
        ) : null }
      </div>
    );
  }
}
