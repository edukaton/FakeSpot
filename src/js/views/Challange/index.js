import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchQuestion } from "../../actions/questions/";

import NewsPaper from "../../components/NewsPaper";
import InputsList from "../../components/InputsList/";
import ChallangeCard from "../../components/ChallangeCard";
import LifeLinesList from "../../components/LifeLinesList/";
import TrueFalseButtons from "../../components/TrueFalseButtons";

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

  useLifeline = n => () => {
    this.setState({
      lifeLinesUsed: [...this.state.lifeLinesUsed, n],
    });
  }

  render() {
    const { challange } = this.props;
    const { sources } = this.state;

    const LifeLinesDispalyed = this.state.lifeLinesUsed.map(val =>
      challange.lifeLines.find(
        ({ id }) => (id === val),
      ).text,
    );

    return (
      <div>
        <ChallangeCard>
          <NewsPaper>
            <header>
              <span>{`Poziom: ${challange.difficulty}`}</span>
              <span>{`Kategoria: ${challange.category}`}</span>
            </header>
            <h1>{challange.text}</h1>
          </NewsPaper>

          <main>
            <TrueFalseButtons
              onSubmitTrue={this.onSubmitTrue}
              onSubmitFalse={this.onSubmitFalse}
            />

            <LifeLinesList
              lifeLines={challange.lifeLines}
              used={this.state.lifeLinesUsed}
              onClick={this.useLifeline}
            />

            {LifeLinesDispalyed}

            <InputsList
              sources={sources}
              onSourceInput={this.onSourceInput}
              onTextInput={this.onTextInput}
            />
            <br />

            <div className="flex justify-center">
              <button>Wyślij</button>
            </div>
          </main>
        </ChallangeCard>
      </div>
    );
  }
}
