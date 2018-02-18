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
          title={!disabled ? "Aby użyć tego koła musisz jeszcze trochę poczekać" : ""}
        >{val.title}
        </button>
      );
    });

    return (
      <div className={styles.container}>
        {list}
      </div>
    );
  }
}
