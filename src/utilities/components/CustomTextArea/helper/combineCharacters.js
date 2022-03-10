import { resetCharacterCount } from './resetCharacterCount';

export const combineCharacters = (filteredLinesArray, typedCharacters) => {
  /**
   * Logic
   */

  let combinedCharacters = filteredLinesArray.reduce(
    (previousLine, currentLine) => {
      return previousLine + currentLine;
    },
    0,
  );

  const resetCount = resetCharacterCount(combinedCharacters, typedCharacters);

  // console.log('typedCharacters: ' + typedCharacters);
  // console.log('combinedCharacters2: ' + combinedCharacters);
  // console.log('resetCount: ' + resetCount);

  return combinedCharacters;
};
