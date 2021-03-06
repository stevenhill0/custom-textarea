import { useCountCharacters } from './useCountCharacters';
import { useCheckKeys } from './useCheckKeys';
import { useActiveLine } from './useActiveLine';
import { useFindLongestLine } from './useFindLongestLine';

import { useState, useEffect } from 'react';

export const useWidthState = (keyDownEventData) => {
  const { liveWidth, keyPress } = keyDownEventData;

  /**
   * React Hooks
   */

  const [textareaWidth, setTextareaWidth] = useState(1);

  /**
   * Custom Hooks
   */

  const pressedKey = useCheckKeys();
  const { firstLine } = useCountCharacters();
  const activeLine = useActiveLine();
  const longestLine = useFindLongestLine();

  /**
   * Logic
   */

  //* Increase Width
  const maxLength = 7.41;
  const currentWidth = Math.floor(liveWidth / maxLength - 1);

  if (
    (keyPress !== pressedKey && firstLine === 0) ||
    (keyPress !== pressedKey && activeLine > longestLine)
  ) {
    if (currentWidth > textareaWidth) {
      setTextareaWidth(currentWidth);
    }
  }

  //* Decrease Width
  const minLiveWidth = 36;
  const maxLiveWidth = 600;

  /**
   * React Hooks
   */

  useEffect(() => {
    if (
      (keyPress === 'Backspace' &&
        liveWidth > minLiveWidth &&
        activeLine * 7 + 33 < maxLiveWidth) || //* * 7 + 33 is to balance the number difference between activeLine and maxLiveWidth
      (keyPress === 'Backspace' &&
        activeLine > firstLine &&
        activeLine > longestLine)
      // activeLine + longestLine > firstLine
    ) {
      setTextareaWidth((preValue) => {
        return preValue - 1;
      });
    }
  }, [liveWidth, keyPress, activeLine, longestLine, firstLine]);

  /**
   * Returned Value
   */

  return textareaWidth;
};
