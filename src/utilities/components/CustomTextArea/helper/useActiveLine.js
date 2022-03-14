import { useCombineLinesCharacters } from './useCombineLinesCharacters';
import { useFilteredCharacters } from './useFilteredCharacters';

export const useActiveLine = (
  keyPress,
  pressedKey,
  typedOutCharacters,
  countCharactersArray,
) => {
  const filteredCharacters = useFilteredCharacters(
    pressedKey,
    typedOutCharacters,
  );

  const combinedLinesCharacters = useCombineLinesCharacters(
    keyPress,
    filteredCharacters,
    countCharactersArray,
  );

  let activeLine = filteredCharacters - combinedLinesCharacters;

  return activeLine;
};
