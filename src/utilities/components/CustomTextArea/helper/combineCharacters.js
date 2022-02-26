export const combineCharacters = (linesArray) => {
  const combinedCharacters = linesArray.reduce((previousLine, currentLine) => {
    return previousLine + currentLine;
  });
  return combinedCharacters;
};
