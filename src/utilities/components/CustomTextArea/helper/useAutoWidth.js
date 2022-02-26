import { countCharacters } from './countCharacters';
import { useCountLines } from './useCountLines';
import { controlWidth } from './controlTextareaWidth';
import { combineCharacters } from './combineCharacters';
import { findLargestLine } from './findLargestLine';
import { useCreateLinesArray } from './useCreateLinesArray';
import { useState } from 'react';

export const useAutoWidth = (
  pressedKeysAndMeasurement,
  setTextareaWidth,
  textareaWidth,
  charactersArray,
) => {
  const [linesArray, setLinesArray] = useState([0]);
  const [linesCount, setLinesCount] = useState([]);

  const { liveWidth, keyPress, typedCharacters } = pressedKeysAndMeasurement;
  const { firstLine } = countCharacters(charactersArray);

  /**
   * Custom Hooks
   */

  useCountLines(charactersArray, pressedKeysAndMeasurement, setLinesCount);
  useCreateLinesArray(keyPress, linesCount, firstLine, setLinesArray);

  /**
   * Logic
   */

  const largestLine = findLargestLine(linesArray);
  const combinedCharacters = combineCharacters(linesArray);
  const activeLine = typedCharacters + 1 - combinedCharacters;

  if (
    (linesArray[0] === 0 && keyPress !== 'Enter') ||
    (activeLine > largestLine && keyPress !== 'Enter')
  ) {
    controlWidth(liveWidth, textareaWidth, setTextareaWidth);
  }
};
