import { useState, useEffect } from 'react';

export const useHeightState = (keyDownEventData) => {
  const { keyPress, liveHeight } = keyDownEventData;

  /**
   * React Hooks
   */

  const [textareaHeight, setTextareaHeight] = useState(1);

  /**
   * Logic
   */

  //* Increase Height
  if (keyPress === 'Enter') {
    const rowHeight = 15;
    const textRows = Math.ceil(liveHeight / rowHeight);

    if (textRows > textareaHeight) {
      setTextareaHeight(textRows);
    }
  }

  //* Decrease Height

  /**
   * Returned Value
   */

  return textareaHeight;
};
