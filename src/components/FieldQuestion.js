import React from 'react';
import {fieldQuestion as questionStyle} from '../style';

const FieldQuestion = ({question}) =>
  <div style={questionStyle()}>
    {question}
  </div>;

export default FieldQuestion;
