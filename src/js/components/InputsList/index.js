import React from "react";
import PropTypes from "prop-types";
import InputLine from "./InputLine";

import styles from "./styles.sass";

export default class InputsList extends React.PureComponent {
  static propTypes = {
    key: PropTypes.string,
    sources: PropTypes.array.isRequired,
    onSourceInput: PropTypes.func.isRequired,
  }

  static defaultProps = {
    key: "sources",
  }

  render() {
    const {
      onSourceInput, sources, key,
    } = this.props;

    const inputsList = sources.map((val, i) => (
      <InputLine
        key={`${key}-${i}`}
        // value={val}
        onSourceInput={onSourceInput(i)}
      />
    ));

    // inputsList.push(
    //   (
    //     <InputLine
    //       key={`${key}-${inputsList.length}`}
    //       value={{ source: "", text: "" }}
    //       onSourceInput={onSourceInput(inputsList.length)}
    //     />
    //   ),
    // );

    return (
      <div className={styles.container}>
        {inputsList}
      </div>
    );
  }
}
