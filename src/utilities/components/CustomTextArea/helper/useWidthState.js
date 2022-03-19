import { useCountCharactersArray } from './useCountCharactersArray';
import { useCountCharacters } from './useCountCharacters';
import { useCheckKeys } from './useCheckKeys';
import { useActiveLine } from './useActiveLine';
import { useFindLongestLine } from './useFindLongestLine';

import { useState, useEffect } from 'react';

export const useWidthState = (keyDownEventData) => {
  const [textareaWidth, setTextareaWidth] = useState(1);

  const { liveWidth, keyPress } = keyDownEventData;

  /**
   * Custom Hooks
   */

  const pressedKey = useCheckKeys(keyPress);
  const countCharactersArray = useCountCharactersArray(keyDownEventData);
  const { firstLine } = useCountCharacters(keyDownEventData);

  const activeLine = useActiveLine(
    keyDownEventData,
    pressedKey,
    countCharactersArray,
  );

  const largestLine = useFindLongestLine(keyPress, countCharactersArray);

  /**
   * Logic
   */

  //Increase Width
  const maxLength = 7.41;
  const currentWidth = Math.floor(liveWidth / maxLength - 1);

  if (
    (keyPress !== pressedKey && firstLine === 0) ||
    (keyPress !== pressedKey && activeLine > largestLine)
  ) {
    if (currentWidth > textareaWidth) {
      setTextareaWidth(currentWidth);
    }
  }

  //Decrease Width
  const minLiveWidth = 36;
  const maxLiveWidth = 600;

  useEffect(() => {
    if (
      (keyPress === 'Backspace' &&
        liveWidth > minLiveWidth &&
        activeLine * 7 + 33 < maxLiveWidth) || //* 7 + 33 is to balance the number difference between activeLine and maxLiveWidth
      (keyPress === 'Backspace' &&
        activeLine > firstLine &&
        activeLine > largestLine)
      // activeLine + largestLine > firstLine
    ) {
      setTextareaWidth((preValue) => {
        return preValue - 1;
      });
    }
  }, [
    liveWidth,
    keyPress,
    setTextareaWidth,
    activeLine,
    largestLine,
    firstLine,
  ]);

  return textareaWidth;
};
