const base = 8;

const baseFont = {
  fontFamily: 'Source Sans Pro,sans-serif',
  WebkitFontSmoothing: 'antialiased'
};

const generateFontColor = (opacity) =>
  `rgba(61, 61, 61, ${opacity})`;

// -- Shared -> Fields

export const fieldQuestion = () => {
  return {
    ...baseFont,
    fontSize: base * 2.5,
    color: generateFontColor(1)
  };
};

export const fieldDescription = () => {
  return {
    ...baseFont,
    paddingTop: base * 2.5,
    paddingBottom: base * 4,
    fontSize: base * 2,
    color: generateFontColor(0.6)
  };
};

export const fieldValidationMessage = valid => {
  return {
    ...baseFont,
    fontSize: (valid) ? base * 1.5 : base * 2,
    paddingTop: base * 1,
    height: base * 2,
    lineHeight: `${base * 2}px`,
    color: `${(valid) ? generateFontColor(0.6) : 'rgba(222, 50, 38, 1)'}`
  };
};

export const fieldContainer = () => {
  return {
    padding: `${base * 4}px 0`
  };
};

// -- ShortText

export const shortText = () => {
  return {
    ...baseFont,
    padding: `${base / 2}px 0`,
    fontSize: base * 3,
    color: 'rgba(111, 179, 210, 1)',
    border: 'none',
    borderBottom: `1px solid ${generateFontColor(0.2)}`,
    outline: 'none'
  };
};
