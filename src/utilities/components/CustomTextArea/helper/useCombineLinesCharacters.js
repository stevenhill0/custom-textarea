import { useCreateFilteredLinesArray } from './useCreateFilteredLinesArray';

export const useCombineLinesCharacters = (keyDownEventData) => {
  const { keyPress } = keyDownEventData;

  /**
   * Custom Hooks
   */

  const filteredLinesArray = useCreateFilteredLinesArray(keyPress);

  /**
   * Logic
   */

  const combinedLinesCharacters = filteredLinesArray.reduce(
    (previousLine, currentLine) => {
      return previousLine + currentLine;
    },
    0,
  );

  /**
   * Returned Value
   */

  return combinedLinesCharacters;
};
