export const combineLinesCharacters = (filteredLinesArray, typedCharacters) => {
  /**
   * Logic
   */

  const combinedLinesCharacters = filteredLinesArray.reduce(
    (previousLine, currentLine) => {
      return previousLine + currentLine;
    },
    0,
  );

  return combinedLinesCharacters;
};
