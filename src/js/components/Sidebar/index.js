import React from "react";
import styles from "./styles.sass";

import Badges from "../Badges/";
import Avatar from "../Avatar/";

export default class Sidebar extends React.Component {
  render() {
    return (
      <aside className={`${styles.sidebar} flex flex-col items-center`}>
        <header>
          <p className="text-center">Wynik</p>
          <p className={`${styles.scoreText} text-center`}>{this.props.user.points}</p>
        </header>
        <div className={styles.divider} />
        <main>
          <p className="text-center">Osiągnięcia</p>
          <Badges
            badges={this.props.badges}
            badgesCollected={this.props.user.badgesCollected}
          />
        </main>
        <Avatar
          avatar={this.props.user.avatar}
        />
      </aside>
    );
  }
}
