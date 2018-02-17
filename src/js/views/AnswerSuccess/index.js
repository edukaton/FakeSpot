import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ChallangeCard from "../../components/ChallangeCard";

const mapStateToProps = ({ questions }) => ({
  challange: questions.data[questions.data.length - 1],
});

@connect(mapStateToProps)
export default class AnswerSuccess extends React.Component {
  static propTypes = {
    challange: PropTypes.object.isRequired,
  }

  render() {
    const { challange } = this.props;

    return (
      <div>
        <ChallangeCard>
          <main>
            <h1>Dobrze się spisałeś!</h1>

            <h2>{ challange.text }</h2>

            <p>To {challange.isTrue.toString()}</p>
          </main>
        </ChallangeCard>
      </div>
    );
  }
}
