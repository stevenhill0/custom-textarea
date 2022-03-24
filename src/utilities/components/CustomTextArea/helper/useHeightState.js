import { useState, useEffect } from 'react';

export const useHeightState = (keyDownEventData) => {
  const { keyPress, liveHeight, liveWidth, typedOutCharacters } =
    keyDownEventData;

  /**
   * React Hooks
   */

  const [textareaHeight, setTextareaHeight] = useState(1);

  /**
   * Logic
   */

  //* Increase Height
  const maxLiveWidth = 600;

  const rowHeight = 15; //height of each row
  const textRows = Math.ceil(liveHeight / rowHeight);
  const textRows2 = Math.ceil(liveHeight / rowHeight) - 1;

  if (keyPress === 'Enter') {
    if (textRows > textareaHeight) {
      setTextareaHeight(textRows);
    }
  }

  // else if (textRows > textareaHeight) {
  //   setTextareaHeight(textRows2);
  // }

  console.log('liveWidth: ' + liveWidth);
  console.log(' typedOutCharacters: ' + typedOutCharacters);
  console.log('liveHeight: ' + liveHeight);
  console.log('textRows: ' + textRows);
  console.log('textareaHeight: ' + textareaHeight);

  //* Decrease Height

  /**
   * Returned Value
   */

  return textareaHeight;
};
