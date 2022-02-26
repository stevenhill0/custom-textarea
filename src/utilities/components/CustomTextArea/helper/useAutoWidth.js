import { countCharacters } from './countCharacters';
import { useCountLines } from './useCountLines';
import { controlWidth } from './controlTextareaWidth';
import { combineCharacters } from './combineCharacters';
import { findLargestLine } from './findLargestLine';
import { useState, useEffect } from 'react';

export const useAutoWidth = (
  pressedKeysAndMeasurement,
  setTextareaWidth,
  textareaWidth,
  charactersArray,
) => {
  const { firstLine } = countCharacters(charactersArray);
  const [linesArray, setLinesArray] = useState([0]);
  const [linesCount, setLinesCount] = useState([]);
  const { liveWidth, keyPress, typedCharacters } = pressedKeysAndMeasurement;

  useCountLines(charactersArray, pressedKeysAndMeasurement, setLinesCount);

  useEffect(() => {
    if (keyPress === 'Enter') {
      const newArray = linesCount.filter((lines) => {
        return lines > 0;
      });

      newArray.unshift(firstLine);

      setLinesArray(newArray);
    }
  }, [keyPress, linesCount, firstLine, setLinesArray]);

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
