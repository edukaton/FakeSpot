import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.sass";

export default class LifeLinesList extends React.PureComponent {
  static propTypes = {
    lifeLines: PropTypes.array.isRequired,
    used: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const { lifeLines, used, onClick } = this.props;
    const list = lifeLines.map(val => (
      <button
        key={`lifeLine-${val.id}`}
        disabled={used.indexOf(val.id) >= 0}
        onClick={onClick(val.id)}
      >{val.title}
      </button>
    ));

    return (
      <div className={styles.container}>
        {list}
      </div>
    );
  }
}
