import React, { PropTypes } from 'react';
import styles from './styles.scss';

function Img(props) {
  return (
    <img className={styles.img} src={props.imageUrl} alt={props.alt}/>
  );
}

Img.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Img;
