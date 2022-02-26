export const findLargestLine = (linesArray) => {
  /**
   * Logic
   */

  const largestLine = linesArray.reduce((previousLine, currentLine) => {
    return previousLine > currentLine ? previousLine : currentLine;
  });
  return largestLine;
};
