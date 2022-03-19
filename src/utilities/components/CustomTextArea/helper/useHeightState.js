import { useState, useEffect } from 'react';

export const useHeightState = (keyDownEventData) => {
  const [textareaHeight, setTextareaHeight] = useState(1);

  const { keyPress, liveHeight } = keyDownEventData;

  /**
   * Logic
   */

  // Increase Height
  if (keyPress === 'Enter') {
    const rowHeight = 15;
    const textRows = Math.ceil(liveHeight / rowHeight);

    if (textRows > textareaHeight) {
      setTextareaHeight(textRows);
    }
  }

  // Decrease Height

  return textareaHeight;
};
