export const resetCharacterCount = (combinedCharacters, typedCharacters) => {
  /**
   * Logic
   */

  const resetCount = 0;
  let activeLine = typedCharacters - combinedCharacters;

  if (activeLine < 0) {
    return resetCount;
  }

  console.log(resetCount);
};
