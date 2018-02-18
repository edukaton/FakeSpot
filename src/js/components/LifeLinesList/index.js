import React from "react";

import styles from "./styles.sass";

export default class LifeLinesList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  onClick = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const {
      lifeLines, used, onClick, unlocked,
    } = this.props;


    const list = lifeLines.map((val, i) => {
      const disabled = unlocked > i;

      const isUsed = used.indexOf(val.id) >= 0;

      if (!isUsed) {
        return (
          <button
            key={`lifeLine-${val.id}`}
            disabled={!disabled}
            onClick={disabled ? onClick(val.id) : () => {}}
            title={!disabled ? "Zanim użyjesz koła ratunkowego, spróbuj odpowiedzieć sam" : ""}
            target={(i === 1) ? "_blank" : null}
          >Podpowiedź
          </button>
        );
      }

      return (
        <button
          key={`lifeLine-${val.id}`}
          target={(i === 1) ? "_blank" : null}
          className={styles.used}
        >{val.text}
        </button>
      );
    });

    return (
      <div className={`${styles.container} ${this.state.open ? styles.open : ""} flex-col`}>
        <div className={`flex ${styles.content}`}>
          {list}
        </div>
        <p
          onClick={this.onClick}
          onKeyDown={this.onClick}
          className={`${styles.header}`}
          role="button"
        >Koła ratunkowe <i className="material-icons">{`keyboard_arrow_${this.state.open ? "up" : "down"}`}</i>
        </p>
      </div>
    );
  }
}
