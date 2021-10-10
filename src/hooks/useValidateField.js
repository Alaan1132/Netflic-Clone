import { useState } from 'react';
import { expressions, errorMessages } from '../constants/formsData';

export const useValidateField = ({ value, nameField }) => {
  const [isValidated, setIsValidated] = useState(null);
  const [defaultErrorMessage, setDefaultErrorMessage] = useState('Error');

  const handleValidated = () => {
    let approvedTest;

    if (nameField === 'emailOrPhone') {
      //Regex to detect if value is only digits
      const valueIsNumber = /^\d+$/.test(value);
      approvedTest = validateEmailOrPhone(valueIsNumber);

      valueIsNumber
        ? setDefaultErrorMessage(errorMessages.phone)
        : setDefaultErrorMessage(errorMessages.email);

      value.length === 0 && setDefaultErrorMessage(errorMessages.emailOrPhone);
    } else {
      approvedTest = expressions[nameField]?.test(value);
      setDefaultErrorMessage(errorMessages[nameField]);
    }

    approvedTest ? setIsValidated(true) : setIsValidated(false);
  };

  const validateEmailOrPhone = (valueIsNumber) => {
    const approved = valueIsNumber
      ? expressions['phone']?.test(value)
      : expressions['email']?.test(value);

    return approved;
  };

  return {
    isValidated,
    handleValidated,
    defaultErrorMessage,
  };
};
