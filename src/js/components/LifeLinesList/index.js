import React from "react";

import styles from "./styles.sass";

export default class LifeLinesList extends React.PureComponent {
  render() {
    const {
      lifeLines, used, onClick, unlocked,
    } = this.props;


    const list = lifeLines.map((val, i) => {
      const disabled = used.indexOf(val.id) >= 0 || unlocked > i;
      return (
        <button
          key={`lifeLine-${val.id}`}
          disabled={!disabled}
          onClick={disabled ? onClick(val.id) : () => {}}
          title={!disabled ? "Zanim użyjesz koła ratunkowego, spróbuj odpowiedzieć sam" : ""}
          target={(i === 1) ? "_blank" : null}
        >{val.title}
        </button>
      );
    });

    return (
      <div className={`${styles.container} flex-col`}>
        <p className={styles.header}>Koła ratunkowe <i className="material-icons">keyboard_arrow_down</i></p>
        <div className="flex">
          {list}
        </div>
      </div>
    );
  }
}
