import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../modules/counter/action';
import styles from './InputBar.css';

class InputBar extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Enter a number',
      // value: 50,
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange() {
    this.setState({
      value: this.refs.input.value,
    });
  }

  onClick() {
    this.props.actions.setCount(parseInt(this.state.value, 10));
  }

  render() {
    return (
      <div>
        <input
          className={styles.inputBar}
          ref="input"
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />
        <button
          className={styles.submitButton}
          onClick={this.onClick}
        >submit
        </button>
      </div>
   );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      setCount: actions.set,   //no ()
    }, dispatch),
  };
}

InputBar.propTypes = {
  actions: PropTypes.object,
};

export default connect(null, mapDispatchToProps)(InputBar);
