import React from "react";
import PropTypes from "prop-types";

export default class InputsList extends React.PureComponent {
  static propTypes = {
    onInput: PropTypes.func.isRequired,
    sources: PropTypes.array.isRequired,
    key: PropTypes.string,
  }

  static defaultProps = {
    key: "sources",
  }

  render() {
    const { onInput, sources, key } = this.props;

    const inputsList = sources.map((val, i) => (
      <input
        type="text"
        value={val}
        onInput={onInput(i)}
        onChange={onInput(i)}
        key={`${key}-${i}`}
      />),
    );
    inputsList.push(
      <input
        type="text"
        onInput={onInput(inputsList.length)}
        onChange={onInput(inputsList.length)}
        value=""
        key={`${key}-${inputsList.length}`}
      />,
    );

    return inputsList;
  }
}
