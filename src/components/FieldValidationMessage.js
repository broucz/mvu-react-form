import React from 'react';
import {
  fieldValidationMessage as validationMessageStyle
} from '../style';

const FieldValidationMessage = ({feedback}) =>
  (feedback.hasOwnProperty('advice'))
    ? <div style={validationMessageStyle(true)}>
        <div>{feedback.advice}</div>
      </div>
    : <div style={validationMessageStyle(false)}>
        <div>{feedback.error}</div>
      </div>;

export default FieldValidationMessage;
