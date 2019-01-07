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
          <p className={`mt-2 text-center ${styles.resultMsg}`}>
            <span className={`inline-block ${styles.title}`}>Niestety nie udało się!</span>
          </p>
          <div className="flex flex-col justify-center text-center">
            <p className={`mt-4 ${styles.news}`}>„{ challange.text }”</p>
            <p className="mt-2 text-lg font-bold">
              to
              <span className={challange.isTrue ? styles.true : styles.false}>
                { challange.isTrue ? " prawdziwa " : " fałszywa " }
              </span>
               informacja!
            </p>
          </div>

          <ChallangeCardFrame>
            <header>
              <p>{challange.questionComment}</p>
            </header>
            <main>
              <div className={`flex ${styles.charts}`}>
                <div className={styles.chart}>
                  <img src="/chart.png" alt="chart" />
                  <p>{percentage} graczy oceniło news jako { challange.isTrue ? "prawdziwy" : "fałszywy" }</p>
                </div>
                <div className={styles.chart}>
                  <img src="/chart.png" alt="chart" />
                  <p>60% graczy wskazało to<br />źródło co Ty</p>
                </div>
              </div>
            </main>
            <div className={`${styles.comments} asd`}>
              <span className={styles.stronger}>Gdzie dobrze sprawdzać takie informacje?</span>
              <p>{challange.bestSourceComment}</p>
            </div>
            <main>
              <p className={styles.sourceTitle}>Polecane źródło</p>
              <p className={styles.bestSource}>
                <a href={challange.bestSource}>{challange.bestSource}</a>
              </p>
            </main>
          </ChallangeCardFrame>
          <button className={`flat self-end ${styles.nextButton}`} onClick={this.playAgain}>Gram dalej &gt;</button>
        </main>
      </ChallangeCard>
    );
  }
}
