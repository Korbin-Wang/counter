import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Display, RoundButton, InputBar } from '../../components';
import * as actions from '../../modules/counter/action';
import styles from './App.css';

class App extends Component {
  constructor() {
    super();
    this.onStop = this.onStop.bind(this);
    this.onStart = this.onStart.bind(this);
    // this.onMinus = this.onMinus.bind(this);
    this.state = {
      ticker: null,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isOn && !this.props.counterOn) {
      this.state.ticker = setInterval(() => {
        this.props.actions.minus();
      }, 1000);
    }
    if (!nextProps.isOn || nextProps.timeLeft <= 0) {
      clearInterval(this.state.ticker);
    }
  }

  onStop() {
    this.props.actions.stop();
  }

  onStart() {
    this.props.actions.start();
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.first}>
          <RoundButton onClick={this.onStart} type="start" />
          <Display text={this.props.timeLeft} />
          <RoundButton onClick={this.onStop} type="stop" />
        </div>
        <div className={styles.second}>
          <InputBar />
        </div>
      </div>
    );
  }

}

App.propTypes = {
  actions: PropTypes.object,
  timeLeft: PropTypes.number,
  isOn: PropTypes.bool,
  counterOn: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    timeLeft: state.timeLeft,
    isOn: state.isOn,
    counterOn: state.counterOn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      stop: actions.stop,
      start: actions.start,
      minus: actions.minusOneSecond,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
