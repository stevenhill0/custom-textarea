import { useCombineLinesCharacters } from './useCombineLinesCharacters';
import { useFilteredCharacters } from './useFilteredCharacters';

export const useActiveLine = () => {
  /**
   * Custom Hooks
   */

  const filteredCharacters = useFilteredCharacters();
  const combinedLinesCharacters = useCombineLinesCharacters();

  /**
   * Logic
   */

  let activeLine = filteredCharacters - combinedLinesCharacters;

  /**
   * Returned Value
   */
  console.log(activeLine);
  return activeLine;
};
