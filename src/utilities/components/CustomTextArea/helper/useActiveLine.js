import { useCombineLinesCharacters } from './useCombineLinesCharacters';
import { useFilteredCharacters } from './useFilteredCharacters';

export const useActiveLine = (
  keyPress,
  pressedKey,
  typedOutCharacters,
  countCharactersArray,
  pressedKeysAndMeasure,
) => {
  const filteredCharacters = useFilteredCharacters(
    pressedKey,
    typedOutCharacters,
    pressedKeysAndMeasure,
  );
  const combinedLinesCharacters = useCombineLinesCharacters(
    keyPress,
    countCharactersArray,
  );

  let activeLine = filteredCharacters - combinedLinesCharacters;

  return activeLine;
};
