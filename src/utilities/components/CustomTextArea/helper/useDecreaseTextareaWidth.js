import { useActiveLine } from './useActiveLine';
import { useCountCharacters } from './useCountCharacters';
import { useFindLongestLine } from './useFindLongestLine';
import { useCheckKeys } from './useCheckKeys';
import { useDecreaseLongestLine } from './useDecreaseLongestLine';
import { useEffect } from 'react';

export const useDecreaseTextareaWidth = (
  pressedKeysAndMeasure,
  countCharactersArray,
  textareaWidth,
  setTextareaWidth,
) => {
  const { keyPress, typedOutCharacters, liveWidth } = pressedKeysAndMeasure;

  /**
   * Custom hooks
   */

  const pressedKey = useCheckKeys(keyPress);
  const activeLine = useActiveLine(
    keyPress,
    pressedKey,
    typedOutCharacters,
    countCharactersArray,
  );
  const largestLine = useFindLongestLine(keyPress, countCharactersArray);
  const { firstLine } = useCountCharacters();

  useDecreaseLongestLine(pressedKeysAndMeasure, countCharactersArray);

  /**
   * Effects
   */

  // const maxLength = 7.41;
  // const textRows = Math.floor(liveWidth / maxLength - 1);

  const minLiveWidth = 36;
  const maxLiveWidth = 600;

  useEffect(() => {
    if (
      (keyPress === 'Backspace' &&
        liveWidth > minLiveWidth &&
        activeLine * 7 + 33 < maxLiveWidth) || //* 7 + 33 is to balance the numbers between activeLine and maxLiveWidth
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

  // console.log('liveWidth: ' + liveWidth);
  // console.log('textRows: ' + textRows);
  // console.log('textareaWidth: ' + textareaWidth);
  // console.log('firstLine: ' + firstLine);
  // console.log('largestLine: ' + largestLine);
  // console.log('activeLine: ' + activeLine);
  // console.log('activeLine: ' + activeLine);
  // console.log(' typedOutCharacters: ' +  typedOutCharacters);
  // console.log('countCharactersArray,: ' + countCharactersArray);
};
