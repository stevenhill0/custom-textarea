import { useCombineLinesCharacters } from './useCombineLinesCharacters';
import { useFilteredCharacters } from './useFilteredCharacters';

export const useActiveLine = (keyDownEventData, pressedKey) => {
  const { typedOutCharacters } = keyDownEventData;

  /**
   * Custom Hooks
   */

  const filteredCharacters = useFilteredCharacters(
    pressedKey,
    typedOutCharacters,
  );
  const combinedLinesCharacters = useCombineLinesCharacters(keyDownEventData);

  /**
   * Logic
   */

  let activeLine = filteredCharacters - combinedLinesCharacters;

  /**
   * Returned Value
   */

  return activeLine;
};
