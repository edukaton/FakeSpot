import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import styles from "./styles.sass";

import { setState } from "../../actions/questions/";

import ChallangeCard from "../../components/ChallangeCard";
import ChallangeCardFrame from "../../components/ChallangeCardFrame";

const mapStateToProps = ({ questions }) => ({
  challange: questions.data[questions.data.length - 1],
});

@connect(mapStateToProps)
export default class AnswerSuccess extends React.Component {
  static propTypes = {
    challange: PropTypes.object.isRequired,
  }

  playAgain = () => {
    this.props.dispatch(setState("playing"));
  }

  render() {
    const { challange } = this.props;
    const { globalAnswers } = challange;
    const percentage = `${Math.round(globalAnswers.correct / (globalAnswers.correct + globalAnswers.incorrect) * 100)}%`;

    return (
      <ChallangeCard>
        <main className="flex flex-col">
          <div className="flex flex-col justify-center text-center">
            <p className="mt-2">
              <span className={`inline-block ${styles.title}`}>Dobrze się spisałeś!</span>
            </p>
            <p className="mt-2">News:</p>
            <p className="mt-2">„{ challange.text }”</p>
            <p className="mt-2 text-lg font-bold">jest { challange.isTrue ? "prawdziwy" : "fałszywy" }</p>
          </div>

          <ChallangeCardFrame>
            <header>{challange.questionComment}</header>
            <main>
              <div className={`flex ${styles.charts}`}>
                <div className={styles.chart}>
                  <img src="/chart.png" alt="chart" />
                  <p>{percentage} graczy oceniło news jako { challange.isTrue ? "prawdziwy" : "fałszywy" }</p>
                </div>
                <div className={styles.chart}>
                  <img src="/chart.png" alt="chart" />
                  <p>60% graczy wskazało to<br />źródło co ty</p>
                </div>
              </div>
              <br />
              <p>Najlepsze źródło</p>
              <p className={styles.bestSource}>
                <a href={challange.bestSource}>{challange.bestSource}</a>
              </p>
            </main>
            <footer>{challange.bestSourceComment}</footer>
          </ChallangeCardFrame>
          <button className={`flat self-end ${styles.nextButton}`} onClick={this.playAgain}>Gram dalej &gt;</button>
        </main>
      </ChallangeCard>
    );
  }
}
