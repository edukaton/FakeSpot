import React from "react";
import { connect } from "react-redux";

import styles from "./styles.sass";

import { setState } from "../../actions/questions/";

import ChallangeCard from "../../components/ChallangeCard";

@connect()
export default class AnswerSuccess extends React.Component {
  playAgain = () => {
    this.props.dispatch(setState("playing"));
  }

  render() {
    return (
      <ChallangeCard>
        <main className="flex flex-col">
          <div className="flex flex-col justify-center text-center">
            <p className="mt-2">
              <span className={`inline-block ${styles.title}`}>No i chuj.</span>
            </p>
          </div>
          <button className={`flat self-end ${styles.nextButton}`} onClick={this.playAgain}>Gram dalej &gt;</button>
        </main>
      </ChallangeCard>
    );
  }
}
