import { characterCount } from './characterCount';
import { controlWidth } from './controlTextareaWidth';
import { useState, useEffect } from 'react';

export const useAutoWidth = (
  characterArray,
  keyPress,
  lineCount,
  widthAndHeight,
  characters,
  textareaWidth,
  setTextareaWidth
) => {
  const [linesArray, setLinesArray] = useState([0]);
  const { firstLine } = characterCount(characterArray);
  const { width } = widthAndHeight;

  useEffect(() => {
    if (keyPress.key === 'Enter') {
      const lineArray = lineCount.filter((lines) => {
        return lines > 0;
      });

      lineArray.unshift(firstLine);

      setLinesArray(lineArray);
    }
  }, [keyPress.key, lineCount, firstLine, setLinesArray]);

  const largestLine = linesArray.reduce((previousLine, currentLine) => {
    return previousLine > currentLine ? previousLine : currentLine;
  });

  const combinedCharacters = linesArray.reduce((previousLine, currentLine) => {
    return previousLine + currentLine;
  });

  const activeLine = characters + 1 - combinedCharacters;

  if (
    (linesArray[0] === 0 && keyPress.key !== 'Enter') ||
    activeLine > largestLine
  ) {
    controlWidth(width, textareaWidth, setTextareaWidth);
  }
};
