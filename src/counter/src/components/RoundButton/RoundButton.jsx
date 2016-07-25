import React, { Component, PropTypes } from 'react';
import styles from './RoundButton.css';

class RoundButton extends Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick();
  }

  render() {
    const { type } = this.props;
    const sign = type === 'start' ? 'start' : 'stop';
    return (
      <div
        className={styles.roundButton}
        onClick={this.onClick}
      >
        {sign}
      </div>
    );
  }

}

RoundButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['start', 'stop']),
};

export default RoundButton;
