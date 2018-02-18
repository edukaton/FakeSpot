import React from "react";

import styles from "./styles.sass";

export default class Badges extends React.Component {
  render() {
    const badges = this.props.badges.map(badge =>
      (<img
        key={`badge-${badge.name}`}
        className={`${styles.badge} ${(this.props.badgesCollected.indexOf(badge.id)) < 0 ? styles.disabled : ""}`}
        src={badge.img}
        alt={badge.name}
        title={badge.name}
      />),
    );
    return (
      <main className={`${styles.badges} flex items-start`}>
        {badges}
      </main>
    );
  }
}
