import { createElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { options } from '../../../constants';
import styles from './Heading.module.css';

export const Heading = ({ tag, color, size, weight, children }) => {
  return createElement(
    tag,
    {
      className: classNames(styles.heading, {
        [styles[`color-${color}`]]: color,
        [styles[`size-${size}`]]: size,
        [styles[`weight-${weight}`]]: weight,
      }),
    },
    children
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(options.tags).isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  weight: PropTypes.oneOf(options.weights),
};

Heading.defaultProps = {
  children: 'Hello World',
  tag: 'h1',
  color: 'base',
  weight: 'normal',
};
