import React from 'react';
import {fieldContainer as containerStyle} from '../style';

const FieldContainer = ({children}) =>
  <div style={containerStyle()}>
    {children}
  </div>;

export default FieldContainer;
