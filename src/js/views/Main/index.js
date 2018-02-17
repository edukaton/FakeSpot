import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Challange from "../Challange";
import AnswerSuccess from "../AnswerSuccess";

import Sidebar from "../../components/Sidebar/";
import Container from "../../components/Container";

const mapStateToProps = ({ state }) => ({
  state: state.state,
});

@connect(mapStateToProps)
export default class Main extends React.Component {
  static propTypes = {
    state: PropTypes.string.isRequired,
  }

  render() {
    const { state } = this.props;

    let mainComponent = null;

    switch (state) {
      case "playing": {
        mainComponent = <Challange />;
        break;
      }
      case "answerSuccess": {
        mainComponent = <AnswerSuccess />;
        break;
      }

      // no default
    }

    return (
      <Container>
        <Sidebar />
        { mainComponent }
      </Container>
    );
  }
}
