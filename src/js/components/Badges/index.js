import React from "react";

import styles from "./styles.sass";

export default class Badges extends React.Component {
  render() {
    const badges = this.props.badges.map(badge =>
      (
        <div
          key={`badge-${badge.name}`}
          className={`${styles.badge} ${(this.props.badgesCollected.indexOf(badge.id)) < 0 ? styles.disabled : ""}`}
        >
          <img
            src={badge.img}
            alt={badge.name}
            title={badge.name}
          />
        </div>
      ),
    );
    return (
      <main className={`${styles.badges} flex items-start`}>
        {badges}
      </main>
    );
  }
}
