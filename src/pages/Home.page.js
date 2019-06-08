import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setTitle, setText } from "../redux/actions/index.actions";

import Home from "../components/Home/Home.component";

class HomePage extends Component {
  render() {
    const { setTitle, setText, title, text } = this.props;
    return (
      <Home setTitle={setTitle} setText={setText} title={title} text={text} />
    );
  }
}

HomePage.propTypes = {
  setText: PropTypes.func,
  setTitle: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string
};

const mapStateToProps = state => ({
  title: state.content.title,
  text: state.content.text
});

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch(setTitle(title)),
  setText: text => dispatch(setText(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
