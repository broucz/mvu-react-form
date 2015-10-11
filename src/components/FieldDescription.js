import React from 'react';
import {fieldDescription as descriptionStyle} from '../style';

const FieldDescription = ({description}) =>
  <div style={descriptionStyle()}>
    {description}
  </div>;

export default FieldDescription;
