import React, { PropTypes } from 'react';
import styles from './styles.scss';

function Input(props){
  return (
    <input className={props.className || styles.input}
      onChange={props.onChange}
      type={props.type || 'text'}
      value={props.value || ''}
      placeholder={props.placeholder} />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
