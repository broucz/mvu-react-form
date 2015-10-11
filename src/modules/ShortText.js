import React from 'react';
import FieldValidationMessage from '../components/FieldValidationMessage';
import {shortText as inputStyle} from '../style';

// -- Model

const model = '';

// -- Update

const UPDATE = 'UPDATE';
const VALIDATE = 'VALIDATE';

const update =
  (
    {state = model} = {},
    {type, value} = {},
    { validate:
      { expression
      , message: {advice, error} = {}
      } = {}
    } = {}
  ) => {
    switch (type) {
    case UPDATE:
    case VALIDATE:
      return (expression.test(value))
        ? {state: value, feedback: {advice}}
        : {state: value, feedback: {error}};
    default:
      return {state, feedback: {advice}};
    }
  };

// -- View

const view = ({state, dispatch, feedback}) =>
  <div>
    <input
      type="text"
      value={state}
      style={inputStyle()}
      onChange={({target: {value}}) => dispatch({
        type: UPDATE,
        value
      })}
      onBlur={({target: {value}}) => dispatch({
        type: VALIDATE,
        value
      })}
    />
    <FieldValidationMessage feedback={feedback}/>
  </div>;

export {update, view};
