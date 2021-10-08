import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Picture.module.css';

export const Picture = ({ src, width, height }) => {
  return (
    <picture className={classNames(styles.picture)}>
      <img src={src} style={{ height, maxWidth: width }} />
    </picture>
  );
};

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

Picture.defaultProps = {
  height: 'auto',
};
