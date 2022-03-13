import { countCharacters } from './countCharacters';
import { useCreateLinesArray } from './useCreateLinesArray';
import { controlTextareaWidth } from './controlTextareaWidth';
import { useDecreaseTextareaWidth } from './useDecreaseTextareaWidth';
import { useActiveLine } from './useActiveLine';
import { findLargestLine } from './findLargestLine';
import { useFilteredLinesArray } from './useFilteredLinesArray';
import { useFilteredCharacters } from './useFilteredCharacters';
import { useState } from 'react';

export const useAutoWidth = (
  pressedKeysAndMeasure,
  setTextareaWidth,
  textareaWidth,
  countCharactersArray,
) => {
  const [linesArray, setLinesArray] = useState([]);
  const [filteredLinesArray, setFilteredLinesArray] = useState([0]);

  const { liveWidth, keyPress, typedOutCharacters } = pressedKeysAndMeasure;
  const { firstLine, lastLine } = countCharacters(countCharactersArray);

  /**
   *  Logic
   */

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

  /**
   * Custom Hooks
   */

  const filteredCharacters = useFilteredCharacters(
    pressedKey,
    typedOutCharacters,
  );

  useCreateLinesArray(keyPress, lastLine, setLinesArray);
  useFilteredLinesArray(keyPress, firstLine, linesArray, setFilteredLinesArray);

  const activeLine = useActiveLine(
    keyPress,
    pressedKey,
    filteredLinesArray,
    filteredCharacters,
  );

  // console.log(activeLine);
  /**
   * Logic
   */

  const largestLine = findLargestLine(filteredLinesArray);

  // console.log('linesArray: ' + linesArray);
  // console.log('linesCount: ' + linesCount);
  // console.log(' typedOutCharacters: ' +  typedOutCharacters);
  // console.log('combinedCharacters: ' + combinedCharacters);

  // console.log('largestLine: ' + largestLine);
  // console.log('activeLine: ' + activeLine);
  // console.log('firstLine: ' + firstLine);
  // console.log(keyPress);
  // console.log(combinedCharacters);

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
    typedOutCharacters,
    countCharactersArray,
  );
};
