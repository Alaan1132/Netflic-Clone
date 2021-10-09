import PropTypes from 'prop-types';
import { useState } from 'react';

import { options } from '../../../constants';
import { Icon } from '../Icons';
import { Paragraph } from '../Paragraph/Paragraph';

import styles from './Checkbox.module.css';

export const Checkbox = ({ size, label, colorIcon, colorLabel }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div onClick={() => setIsChecked(!isChecked)} className={styles.container}>
      <div className={styles.checkbox}>
        <Icon className={!isChecked && styles.hidden} color={colorIcon} size={size} name="check" />
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      </div>
      <Paragraph size={size} color={colorLabel}>
        {label}
      </Paragraph>
    </div>
  );
};

Checkbox.propTypes = {
  size: PropTypes.oneOf(options.sizes),
  colorIcon: PropTypes.oneOf(options.colors),
  colorLabel: PropTypes.oneOf(options.colors),
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  size: 'md',
  label: 'Acepto',
  colorIcon: 'base',
  colorLabel: 'base',
};
