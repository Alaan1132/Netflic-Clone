import PropTypes from 'prop-types';
import classNames from 'classnames';

import { options } from '../../../constants/options';
import styles from './InputForm.module.css';
import { Paragraph } from '../Paragraph/Paragraph';
import { useField } from '../../../hooks/useField';
import { useValidateField } from '../../../hooks/useValidateField';

export const InputForm = ({ type, name, label, customMessage, variant_dark }) => {
  const { value, handleChange } = useField();
  const { isValidated, handleValidated, defaultErrorMessage } = useValidateField({ value, name });

  return (
    <div
      className={classNames(styles.group, {
        [styles.error]: isValidated === false,
      })}>
      <div className={styles.input__group}>
        <input
          name={name}
          id={name}
          autoComplete="off"
          className={classNames(styles.input, {
            [styles.input__dark]: variant_dark,
          })}
          type={type}
          value={value}
          onChange={handleChange}
          onKeyUp={handleValidated}
          onBlur={handleValidated}
        />
        <label
          htmlFor={name}
          className={classNames(styles.label, {
            [styles.label__dark]: variant_dark,
          })}>
          {label ?? `Insert your ${type}`}
        </label>
      </div>
      {/*Error style in form or in paragraph?... */}
      <Paragraph>{customMessage ?? defaultErrorMessage}</Paragraph>
    </div>
  );
};

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(options.inputTypes),
  label: PropTypes.string,
  variant_dark: PropTypes.bool,
};

InputForm.defaultProps = {
  type: 'password',
  name: 'password',
};
