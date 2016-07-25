import React, { PropTypes } from 'react';
import styles from './Display.css';

const Display = (props) => (
  <div className={styles.display}>{props.text}</div>
);

Display.propTypes = {
  text: PropTypes.number,
};

export default Display;
