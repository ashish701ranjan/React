import React from 'react';

export const validation = (props) => {
  const MIN_LENGTH = 3;
  const MAX_LENGTH = 10;
  const SHORT_WARNING = 'Text too short!!';
  const LONG_WARNING = 'Text too long!!';

  let textToDisplay = '';
  let style = {};
  if (props.textLength < MIN_LENGTH) {
      textToDisplay = SHORT_WARNING;
      style.color = '#c08821';
  } else if (props.textLength > MAX_LENGTH) {
    textToDisplay = LONG_WARNING;
    style.color = 'red';
  }



  return (
        <p style={style}>{textToDisplay}</p>
    );
};

export default validation;
