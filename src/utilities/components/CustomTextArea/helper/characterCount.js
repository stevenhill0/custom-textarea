export const characterCount = (characterArray) => {
  const lastNumber = characterArray[characterArray.length - 1];
  const secondLast = characterArray[characterArray.length - 2];
  const firstLine = characterArray[0];
  const lastLine = lastNumber - secondLast - 1;

  const lines = { firstLine, lastLine };

  return lines;
};
