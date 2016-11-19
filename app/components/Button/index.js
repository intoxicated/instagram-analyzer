import React, { PropTypes } from 'react';

import styles from './styles.scss';

function Button(props) {
  const className = props.className || styles.button;

  return (
    <button className={className}
      onClick={() => {
        props.onClick();
      }}
      {...props}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
