import { useEffect } from 'react';

export const useDecreaseTextareaWidth = (
  liveWidth,
  textareaWidth,
  setTextareaWidth,
  keyPress,
  activeLine,
  largestLine,
  firstLine,
  typedCharacters,
  charactersArray,
) => {
  /**
   * Logic
   */

  const maxLength = 7.41;
  const textRows = Math.floor(liveWidth / maxLength - 1);

  const minliveWidth = 36;
  const maxliveWidth = 600;

  useEffect(() => {
    if (
      keyPress === 'Backspace' &&
      liveWidth > minliveWidth &&
      activeLine * 7 + 33 < maxliveWidth &&
      activeLine > firstLine &&
      activeLine > largestLine &&
      activeLine + largestLine > firstLine
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

  // console.log('livewidth: ' + liveWidth);
  // console.log('textRows: ' + textRows);
  // console.log('textareaWidth: ' + textareaWidth);
  // console.log('firstLine: ' + firstLine);
  // console.log('largestLine: ' + largestLine);
  // console.log('activeLine: ' + activeLine);
  // console.log('typedCharacters: ' + typedCharacters);
  // console.log('charactersArray,: ' + charactersArray);
};
