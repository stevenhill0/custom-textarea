import { countCharacters } from './countCharacters';
import { useCreateLinesArray } from './useCreateLinesArray';
import { controlTextareaWidth } from './controlTextareaWidth';
import { useDecreaseTextareaWidth } from './useDecreaseTextareaWidth';
import { combineCharacters } from './combineCharacters';
import { findLargestLine } from './findLargestLine';
import { useFilteredLinesArray } from './useFilteredLinesArray';
import { useState } from 'react';

export const useAutoWidth = (
  pressedKeysAndMeasure,
  setTextareaWidth,
  textareaWidth,
  charactersArray,
) => {
  const [linesArray, setLinesArray] = useState([]);
  const [filteredLinesArray, setFilteredLinesArray] = useState([0]);

  const { liveWidth, keyPress, typedCharacters } = pressedKeysAndMeasure;
  const { firstLine, lastLine } = countCharacters(charactersArray);

  /**
   * Custom Hooks
   */

  useCreateLinesArray(keyPress, lastLine, setLinesArray);
  useFilteredLinesArray(keyPress, firstLine, linesArray, setFilteredLinesArray);

  /**
   * Logic
   */

  const largestLine = findLargestLine(filteredLinesArray);

  let combinedCharacters = combineCharacters(
    filteredLinesArray,
    typedCharacters,
  );

  let activeLine = typedCharacters - combinedCharacters;

  // console.log('linesArray: ' + linesArray);
  // console.log('linesCount: ' + linesCount);
  // console.log('typedCharacters: ' + typedCharacters);
  // console.log('combinedCharacters: ' + combinedCharacters);

  // console.log('largestLine: ' + largestLine);
  // console.log('activeLine: ' + activeLine);
  // console.log('firstLine: ' + firstLine);
  // console.log(keyPress);
  console.log(linesArray);

  const keyCheck = [
    'Enter',
    'Backspace',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Escape',
    'Control',
    'Shift',
    '(space)',
    'F12',
  ];
  const keyArray = keyCheck.filter((key) => {
    return key === keyPress;
  });
  const pressedKey = keyArray.toString();

  if (
    (keyPress !== pressedKey && firstLine === 0) ||
    (keyPress !== pressedKey && activeLine > largestLine)
  ) {
    controlTextareaWidth(liveWidth, textareaWidth, setTextareaWidth, keyPress);
  }

  useDecreaseTextareaWidth(
    liveWidth,
    textareaWidth,
    setTextareaWidth,
    keyPress,
    activeLine,
    largestLine,
    firstLine,
    typedCharacters,
    charactersArray,
  );
};
