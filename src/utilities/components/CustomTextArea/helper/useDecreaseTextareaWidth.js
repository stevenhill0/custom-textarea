import { useEffect } from 'react';

export const useDecreaseTextareaWidth = (
  liveWidth,
  textareaWidth,
  setTextareaWidth,
  keyPress,
  activeLine,
  largestLine,
  firstLine,
  typedOutCharacters,
  countCharactersArray,
) => {
  /**
   * Logic
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
  console.log('firstLine: ' + firstLine);
  console.log('largestLine: ' + largestLine);
  console.log('activeLine: ' + activeLine);
  console.log('activeLine: ' + activeLine);
  // console.log(' typedOutCharacters: ' +  typedOutCharacters);
  // console.log('countCharactersArray,: ' + countCharactersArray);
};
