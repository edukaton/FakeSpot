import React from "react";

import styles from "./styles.sass";

export default class Badges extends React.Component {
  constructor(props) {
    super();

    this.initialBadges = [...props.badgesCollected];
  }

  render() {
    const badges = this.props.badges.map(badge =>
      (
        <div
          key={`badge-${badge.name}`}
          className={`${styles.badge}`}
        >
          <img
            src={badge.img}
            alt={badge.name}
            title={badge.name}
          />
          { ((this.props.badgesCollected.indexOf(badge.id)) < 0) ? (
            <img
              src="/badges/lock.png"
              alt={badge.name}
              title={badge.name}
            />
          ) : (this.initialBadges.indexOf(badge.id) < 0) ? (
            <img
              src="/badges/lock.gif"
              alt={badge.name}
              title={badge.name}
            />
          ) : null
          }
        </div>
      ),
    );
    return (
      <main className={`${styles.badges} flex items-start`}>
        {badges}

        <img
          style={{ display: "none" }}
          src="/badges/lock.gif"
        />
      </main>
    );
  }
}
