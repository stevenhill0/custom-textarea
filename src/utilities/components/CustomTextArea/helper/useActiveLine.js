import { useCombineLinesCharacters } from './useCombineLinesCharacters';
import { useFilteredCharacters } from './useFilteredCharacters';

export const useActiveLine = (keyDownEventData, pressedKey) => {
  const { typedOutCharacters } = keyDownEventData;

  const filteredCharacters = useFilteredCharacters(
    pressedKey,
    typedOutCharacters,
  );

  const combinedLinesCharacters = useCombineLinesCharacters(keyDownEventData);

  let activeLine = filteredCharacters - combinedLinesCharacters;
  console.log(activeLine);
  return activeLine;
};
