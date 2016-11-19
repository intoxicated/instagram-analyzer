import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { selectApp, Actions } from '../../ducks';
import UserItem from '../UserItem';
import { browserHistory } from 'react-router';
import _ from 'lodash';

class Navigation extends React.Component {
  static propTypes = {
    login: PropTypes.func,
    logout: PropTypes.func,
    user: PropTypes.object,
  }

  goToMain(){
    browserHistory.push("/");
  }

  logout() {
    browserHistory.push("/")
    this.props.logout();
  }

  login() {
    this.props.login();
  }

  render() {
    const { user } = this.props;

    return (
      <nav className={styles.navigation}>
        <ul className="header">
          <li className={styles.app_title}>
            <div onClick={this.goToMain}>
              <h3>Instagram Analyzer</h3>
            </div>
          </li>
          <If condition={_.isEmpty(user)}>
            <li>
              <a href="" onClick={() => this.login()}>Login</a>
            </li>
          </If>
          <If condition={!_.isEmpty(user)}>
            <li>
              <a href="" onClick={() => this.logout()}>Logout</a>
            </li>
            <li>
              <UserItem userInfo={user}/>
            </li>
          </If>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
