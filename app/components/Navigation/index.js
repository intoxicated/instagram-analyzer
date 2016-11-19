import React, { PropTypes } from 'react';
import styles from './styles.scss';

class Navigation extends React.Component {
  static propTypes = {

  }

  constructor(props) {

  }

  render() {
    return (
      <h1>Instagram Analyzer</h1>
      <ul className="header">
        <li>Home</li>
        <li>Login</li>
        <li>Logout</li>
      </ul>
    )
  }
}

export default Navigation;
