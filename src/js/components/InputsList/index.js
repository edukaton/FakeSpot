import React from "react";
import PropTypes from "prop-types";
import InputLine from "./InputLine";

import styles from "./styles.sass";

export default class InputsList extends React.PureComponent {
  static propTypes = {
    key: PropTypes.string,
    sources: PropTypes.array.isRequired,
    onTextInput: PropTypes.func.isRequired,
    onSourceInput: PropTypes.func.isRequired,
  }

  static defaultProps = {
    key: "sources",
  }

  render() {
    const {
      onSourceInput, onTextInput, sources, key,
    } = this.props;

    const inputsList = sources.map((val, i) => (
      <InputLine
        key={`${key}-${i}`}
        value={val}
        onSourceInput={onSourceInput(i)}
        onTextInput={onTextInput(i)}
      />
    ));

    inputsList.push(
      (
        <InputLine
          key={`${key}-${inputsList.length}`}
          value={{ source: "", text: "" }}
          onSourceInput={onSourceInput(inputsList.length)}
          onTextInput={onTextInput(inputsList.length)}
        />
      ),
    );

    return (
      <div className={styles.container}>
        {inputsList}
      </div>
    );
  }
}
