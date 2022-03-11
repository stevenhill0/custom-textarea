import { combineLinesCharacters } from './combineLinesCharacters';

export const useActiveLine = (
  keyPress,
  pressedKey,
  filteredLinesArray,
  typedOutCharacters,
) => {
  const combinedLinesCharacters = combineLinesCharacters(
    filteredLinesArray,
    typedOutCharacters,
  );

  let activeLine = typedOutCharacters - combinedLinesCharacters;

  //   if (keyPress === 'Enter' && activeLine > 0) {
  //     activeLine = 0;

  //     return activeLine;
  //   }

  return activeLine;
};
