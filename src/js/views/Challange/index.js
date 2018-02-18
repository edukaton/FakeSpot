import React from "react";
import { connect } from "react-redux";

import { submitAnswers, fetchQuestion } from "../../actions/questions/";

import NewsPaper from "../../components/NewsPaper";
import InputsList from "../../components/InputsList/";
import ChallangeCard from "../../components/ChallangeCard";
import LifeLinesList from "../../components/LifeLinesList/";
import TrueFalseButtons from "../../components/TrueFalseButtons";
import LifeLinesDisplayed from "../../components/LifeLinesDisplayed";

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
      sources: [{}],
      lifeLinesUsed: [],
      optionSelected: null,
      notificationIndex: 0,
      lifelinesUnlocked: 0,
    };

    this.timer = null;
    this.timer2 = null;

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

    Notification.requestPermission()
      .then((result) => {
        if (result === "granted") {
          // this.sendNotification(60);
        }
      });

    this.timer2 = setTimeout(() => {
      this.setState({
        lifelinesUnlocked: this.state.lifelinesUnlocked + 1,
      });

      const notification = new Notification(`Odblokowałeś ${this.state.lifelinesUnlocked}. koło ratunkowe!`);

      this.timer2 = setTimeout(() => {
        this.setState({
          lifelinesUnlocked: this.state.lifelinesUnlocked + 1,
        });

        const notification = new Notification(`Odblokowałeś ${this.state.lifelinesUnlocked}. koło ratunkowe!`);
      }, 1000 * 30);
    }, 1000 * 15);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.timer2);
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

  sendNotification = (time) => {
    this.timer = setTimeout(() => {
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

    if (this.state.optionSelected === null || this.state.sources.length === 0) {
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
            unlocked={this.state.lifelinesUnlocked}
          />

          <LifeLinesDisplayed
            lifeLines={challange.lifeLines}
            lifeLinesUsed={this.state.lifeLinesUsed}
          />

          <InputsList
            sources={sources}
            onSourceInput={this.onSourceInput}
          />
          <br />

          <div className="flex justify-center">
            <button onClick={this.submitAnswer}>Wyślij</button>
          </div>
        </main>
      </ChallangeCard>
    );
  }
}
