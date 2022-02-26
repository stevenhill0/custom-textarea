export const combineCharacters = (linesArray) => {
  /**
   * Logic
   */

  const combinedCharacters = linesArray.reduce((previousLine, currentLine) => {
    return previousLine + currentLine;
  });
  return combinedCharacters;
};
