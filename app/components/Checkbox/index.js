import React, { PropTypes } from 'react';
import styles from './styles.scss';

class Checkbox extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    handleClick: PropTypes.func,
    checked: PropTypes.bool,
  }

  render() {
    const { className, checked, handleClick } = this.props;

    return (
      <span className={styles.checkbox_wrap}>
        <input
          className={styles.check_box}
          type='checkbox'
          onClick={handleClick}
          checked={checked}/>

        <div className={className || styles.virtual_check_box}></div>
      </span>
    );
  }
}

export default Checkbox;
