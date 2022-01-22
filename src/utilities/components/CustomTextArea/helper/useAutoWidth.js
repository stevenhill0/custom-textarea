import { countCharacters } from './countCharacters';
import { controlWidth } from './controlTextareaWidth';
import { useState, useEffect } from 'react';

export const useAutoWidth = (
  charactersArray,
  keyPress,
  linesCount,
  measureWidthAndHeight,
  activeCharacters,
  textareaWidth,
  setTextareaWidth,
) => {
  const { firstLine } = countCharacters(charactersArray);
  const [linesArray, setLinesArray] = useState([0]);
  const { width } = measureWidthAndHeight;

  useEffect(() => {
    if (keyPress.key === 'Enter') {
      const newArray = linesCount.filter((lines) => {
        return lines > 0;
      });

      newArray.unshift(firstLine);

      setLinesArray(newArray);
    }
  }, [keyPress.key, linesCount, firstLine, setLinesArray]);

  const largestLine = linesArray.reduce((previousLine, currentLine) => {
    return previousLine > currentLine ? previousLine : currentLine;
  });

  const combinedCharacters = linesArray.reduce((previousLine, currentLine) => {
    return previousLine + currentLine;
  });

  const activeLine = activeCharacters + 1 - combinedCharacters;

  if (
    (linesArray[0] === 0 && keyPress.key !== 'Enter') ||
    activeLine > largestLine
  ) {
    controlWidth(width, textareaWidth, setTextareaWidth);
  }
};
