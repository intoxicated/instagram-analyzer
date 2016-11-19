import React, { PropTypes } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';

class UserItem extends React.Component {
  static propTypes = {
    userInfo: PropTypes.object,
  }

  render() {
    const { userInfo } = this.props;

    return (
      <div className={styles.userItem}>
        <img src={userInfo.profile_picture}/>
        <p>{userInfo.full_name}</p>
      </div>
    )
  }
}

export default UserItem
