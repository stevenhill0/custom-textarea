export const findLargestLine = (linesArray) => {
  const largestLine = linesArray.reduce((previousLine, currentLine) => {
    return previousLine > currentLine ? previousLine : currentLine;
  });
  return largestLine;
};
