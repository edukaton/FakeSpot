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
      // const disabled = true;

      const isUsed = used.indexOf(i) >= 0;

      if (!isUsed) {
        return (
          <button
            key={`lifeLine-${i}`}
            disabled={!disabled}
            onClick={disabled ? onClick(i) : () => {}}
            title={disabled ? "Zanim użyjesz koła ratunkowego, spróbuj odpowiedzieć sam" : ""}
            target={(i === 1) ? "_blank" : null}
            className={styles.btn}
          >Podpowiedź
          </button>
        );
      }

      if (i === 1) {
        const foundLinks = val.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

        const linksList = foundLinks.map((link, j) => (
          <p>
            <a
              key={`lifeLine-${i}-${j}`}
              href={link}
              target="_blank"
            >{link}
            </a>
          </p>
        ));

        return (
          <div key={`lifeLine-${i}`} className={`${styles.used} ${styles.btn}`}>
            <p>
              <strong>Sugerowane {linksList.length === 1 ? "źródło" : "źródła"}</strong>
            </p>
            {linksList}
          </div>
        );
      }

      return (
        <div key={`lifeLine-${i}`} className={`${styles.used} ${styles.btn}`}>
          <p>
            <strong>Sugerowane hasła wyszukiwania</strong>
          </p>
          <p>{val}</p>
        </div>
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
