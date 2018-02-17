import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InputsList from "../../components/InputsList/";

const mapStateToProps = ({ questions }) => ({
  challange: questions.data[questions.data.length - 1],
});

@connect(mapStateToProps)
export default class Challange extends React.Component {
  static propTypes = {
    challange: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      sources: [],
    };
  }

  onSourcesInput = n => (e) => {
    let newSources = [...this.state.sources];
    newSources[n] = e.target.value;

    newSources = newSources.filter(val => val !== "");

    this.setState({ sources: newSources });
  }

  onSubmitTrue = (...args) => this.submitAnswer(true)(...args);
  onSubmitFalse = (...args) => this.submitAnswer(false)(...args);

  submitAnswer = val => () => {
    const { challange, dispatch } = this.props;

    if (val === challange.isTrue) {
      console.log("You did it!");
    } else {
      console.log("Unfortunately no 😔!");
    }

    dispatch({
      type: "QUESTION/USER_SUBMIT",
      payload: {
        isTrue: val,
        sources: this.state.sources,
      },
    });
  }

  render() {
    const { challange } = this.props;
    const { sources } = this.state;

    return (
      <div>
        <p>{challange.text}</p>

        <div>
          <InputsList sources={sources} onInput={this.onSourcesInput} />
        </div>

        <button onClick={this.onSubmitTrue}>Prawda</button>
        <button onClick={this.onSubmitFalse}>Fałsz</button>
      </div>
    );
  }
}
