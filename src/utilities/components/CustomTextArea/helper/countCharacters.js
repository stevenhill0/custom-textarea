export const countCharacters = (charactersArray) => {
  const lastNumber = charactersArray[charactersArray.length - 1];
  const secondLast = charactersArray[charactersArray.length - 2];
  const firstLine = charactersArray[0];
  const lastLine = lastNumber - secondLast - 1;

  const lines = { firstLine, lastLine };

  return lines;
};
