import React from "react";
import { connect } from "react-redux";

import { LIFE_LINE_1_TIME, LIFE_LINE_2_TIME } from "../../constants/notifications";

import { submitAnswers, fetchQuestion } from "../../actions/questions/";
import { requestPermission } from "../../utils/notifications";

import NewsPaper from "../../components/NewsPaper";
import InputsList from "../../components/InputsList/";
import ChallangeCard from "../../components/ChallangeCard";
import LifeLinesList from "../../components/LifeLinesList/";
import TrueFalseButtons from "../../components/TrueFalseButtons";
import SubmitButton from "../../components/SubmitButton";

import styles from "../../components/ChallangeCard/style.sass";

const mapStateToProps = ({ questions, notifications }) => ({
  challange: questions.data[questions.data.length - 1],
  fetched: questions.fetched,
  notifications: notifications.data,
});

@connect(mapStateToProps)
export default class Challange extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sources: [{
        source: "",
        text: "",
      }],
      lifeLinesUsed: [],
      optionSelected: null,
      notificationIndex: 0,
      lifelinesUnlocked: 0,
    };

    this.hintTimer = null;
    this.lifeLineTimer = null;

    const notificationsShuffled = [...props.notifications];

    for (let i = notificationsShuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [notificationsShuffled[i],
        notificationsShuffled[j]] = [notificationsShuffled[j],
        notificationsShuffled[i]];
    }

    this.notificationsShuffled = notificationsShuffled;
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestion());

    requestPermission()
      .then((result) => {
        if (result === "granted") {
          this.sendNotification(10);
        }
      });

    this.lifeLineTimer = setTimeout(() => {
      this.setState({
        lifelinesUnlocked: this.state.lifelinesUnlocked + 1,
      });

      new Notification(`Odblokowałeś ${this.state.lifelinesUnlocked}. koło ratunkowe!`);

      this.lifeLineTimer = setTimeout(() => {
        this.setState({
          lifelinesUnlocked: this.state.lifelinesUnlocked + 1,
        });

        new Notification(`Odblokowałeś ${this.state.lifelinesUnlocked}. koło ratunkowe!`);
      }, 1000 * LIFE_LINE_1_TIME);
    }, 1000 * (LIFE_LINE_2_TIME - LIFE_LINE_1_TIME));
  }

  componentWillUnmount() {
    clearInterval(this.hintTimer);
    clearInterval(this.lifeLineTimer);
  }

  onSourceInput = n => (e) => {
    const newSources = [...this.state.sources];
    newSources[n] = e.target.value;

    // newSources = newSources.filter(val => val !== "");

    this.setState({ sources: newSources });
  }

  onSourceInput = n => (e) => {
    const newSources = [...this.state.sources];
    if (!newSources[n]) {
      newSources[n] = {
        source: "",
        text: "",
      };
    }

    newSources[n] = { source: e.target.value, text: newSources[n].text };

    // newSources = newSources.filter(val => (val.source !== "" || val.text !== ""));

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

  sendNotification = (time) => {
    this.hintTimer = setTimeout(() => {
      const options = {
        body: this.notificationsShuffled[this.state.notificationIndex],
        icon: "/avatar.png",
      };

      this.setState({
        notificationIndex: this.state.notificationIndex + 1,
      });

      const notification = new Notification("Hi there!", options);

      if (this.state.notificationIndex < this.notificationsShuffled.length) {
        this.sendNotification(time * 2);
      }
    }, 1000 * time);
  }

  selectButton = (val) => {
    this.setState({
      optionSelected: val,
    });
  }

  submitAnswer = () => {
    const { dispatch } = this.props;

    if (this.state.optionSelected === null || this.state.sources[0].source === "") {
      return;
    }

    dispatch(submitAnswers({
      isTrue: this.state.optionSelected,
      sources: this.state.sources,
    }, this.props.challange));
  }

  useLifeline = n => () => {
    this.setState({
      lifeLinesUsed: [...this.state.lifeLinesUsed, n],
    });
  }

  render() {
    const { challange } = this.props;
    const { sources } = this.state;

    if (this.props.fetched === false) {
      return null;
    }

    return (
      <ChallangeCard>

        <NewsPaper>
          <h1>{challange.text}</h1>
        </NewsPaper>

        <div className={`${styles.questionHeader} leading-normal`}>
          Czy ta informacja jest prawdziwa czy fałszywa? <br />
          Znajdź odpowiedź, wynajdując w Internecie wiarygodne źródło
        </div>

        <form style={{ paddingTop: 0 }} onSubmit={this.submitAnswer}>
          <TrueFalseButtons
            onSubmitTrue={this.onSubmitTrue}
            onSubmitFalse={this.onSubmitFalse}
            selected={this.state.optionSelected}
          />

          <InputsList
            sources={sources}
            onSourceInput={this.onSourceInput}
          />

          <SubmitButton />
        </form>
        <LifeLinesList
          lifeLines={challange.lifeLines}
          used={this.state.lifeLinesUsed}
          onClick={this.useLifeline}
          unlocked={this.state.lifelinesUnlocked}
        />
      </ChallangeCard>
    );
  }
}
