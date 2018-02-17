import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchQuestion } from "../../actions/questions/";

import NewsPaper from "../../components/NewsPaper";
import InputsList from "../../components/InputsList/";
import ChallangeCard from "../../components/ChallangeCard";
import LifeLinesList from "../../components/LifeLinesList/";
import TrueFalseButtons from "../../components/TrueFalseButtons";
import LifeLinesDisplayed from "../../components/LifeLinesDisplayed";

const mapStateToProps = ({ questions }) => ({
  challange: questions.data[questions.data.length - 1],
});

@connect(mapStateToProps)
export default class Challange extends React.Component {
  static propTypes = {
    challange: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor({ dispatch }) {
    super();
    this.state = {
      sources: [],
      lifeLinesUsed: [],
      optionSelected: null,
    };

    dispatch(fetchQuestion());
  }

  onSourceInput = n => (e) => {
    let newSources = [...this.state.sources];
    newSources[n] = e.target.value;

    newSources = newSources.filter(val => val !== "");

    this.setState({ sources: newSources });
  }

  onSourceInput = n => (e) => {
    let newSources = [...this.state.sources];
    if (!newSources[n]) {
      newSources[n] = {
        source: "",
        text: "",
      };
    }

    newSources[n] = { source: e.target.value, text: newSources[n].text };

    newSources = newSources.filter(val => (val.source !== "" || val.text !== ""));

    this.setState({ sources: newSources });
  }

  onTextInput = n => (e) => {
    let newSources = [...this.state.sources];
    if (!newSources[n]) {
      newSources[n] = {
        source: "",
        text: "",
      };
    }

    newSources[n] = { source: newSources[n].source, text: e.target.value };

    newSources = newSources.filter(val => (val.source !== "" || val.text !== ""));

    this.setState({ sources: newSources });
  }

  onSubmitTrue = () => this.selectButton(true);
  onSubmitFalse = () => this.selectButton(false);

  selectButton = (val) => {
    this.setState({
      optionSelected: val,
    });
  }

  submitAnswer = () => {
    const { challange, dispatch } = this.props;

    if (this.state.optionSelected === challange.isTrue) {
      console.log("You did it!");
    } else {
      console.log("Unfortunately no 😔!");
    }

    dispatch({
      type: "QUESTION/USER_SUBMIT",
      payload: {
        isTrue: this.state.optionSelected,
        sources: this.state.sources,
      },
    });
  }

  useLifeline = n => () => {
    this.setState({
      lifeLinesUsed: [...this.state.lifeLinesUsed, n],
    });
  }

  render() {
    const { challange } = this.props;
    const { sources } = this.state;

    return (
      <div>
        <ChallangeCard>
          <NewsPaper>
            <h1>{challange.text}</h1>
          </NewsPaper>

          <main style={{ paddingTop: 0 }}>
            <TrueFalseButtons
              onSubmitTrue={this.onSubmitTrue}
              onSubmitFalse={this.onSubmitFalse}
              selected={this.state.optionSelected}
            />

            <LifeLinesList
              lifeLines={challange.lifeLines}
              used={this.state.lifeLinesUsed}
              onClick={this.useLifeline}
            />

            <LifeLinesDisplayed lifeLines={challange.lifeLines} lifeLinesUsed={this.state.lifeLinesUsed} />

            <InputsList
              sources={sources}
              onSourceInput={this.onSourceInput}
              onTextInput={this.onTextInput}
            />
            <br />

            <div className="flex justify-center">
              <button onClick={this.submitAnswer}>Wyślij</button>
            </div>
          </main>
        </ChallangeCard>
      </div>
    );
  }
}
