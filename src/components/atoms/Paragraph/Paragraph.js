import React from 'react';

import classNames from 'classnames';
import styles from './Paragraph.module.css';
import PropTypes from 'prop-types';
import { options } from '../../../constants';

export const Paragraph = ({ children, size, color, weight, ...restProps }) => {
  return (
    <p
      className={classNames(styles.paragraph, {
        [styles[`size-${size}`]]: size,
        [styles[`color-${color}`]]: color,
        [styles[`weight-${weight}`]]: weight,
      })}
      {...restProps}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(options.sizes),
  color: PropTypes.oneOf(options.colors),
};

Paragraph.defaultProps = {
  children: 'Hello World',
  size: 'md',
  weight: 'normal',
};
