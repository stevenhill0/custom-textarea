import { useCombineLinesCharacters } from './useCombineLinesCharacters';
import { useFilteredCharacters } from './useFilteredCharacters';

export const useActiveLine = (
  keyDownEventData,
  pressedKey,
  countCharactersArray,
) => {
  const { keyPress, typedOutCharacters } = keyDownEventData;

  const filteredCharacters = useFilteredCharacters(
    pressedKey,
    typedOutCharacters,
  );
  const combinedLinesCharacters = useCombineLinesCharacters(
    keyPress,
    countCharactersArray,
  );

  let activeLine = filteredCharacters - combinedLinesCharacters;
  console.log(activeLine);
  return activeLine;
};
