export const countCharacters = (countCharactersArray) => {
  /**
   * Logic
   */

  const lastNumber = countCharactersArray[countCharactersArray.length - 1];
  const secondLast = countCharactersArray[countCharactersArray.length - 2];
  const firstLine = countCharactersArray[0];
  const lastLine = lastNumber - secondLast - 1;

  const lines = { firstLine, lastLine };

  return lines;
};
