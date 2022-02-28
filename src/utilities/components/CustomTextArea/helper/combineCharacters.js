export const combineCharacters = (linesArray, keyPress) => {
  /**
   * Logic
   */

  const combinedCharacters = linesArray.reduce((previousLine, currentLine) => {
    return previousLine + currentLine;
  }, 0);

  return combinedCharacters;
};
