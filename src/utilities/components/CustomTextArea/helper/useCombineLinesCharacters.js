import { useCreateFilteredLinesArray } from './useCreateFilteredLinesArray';

export const useCombineLinesCharacters = () => {
  /**
   * Custom Hooks
   */

  const filteredLinesArray = useCreateFilteredLinesArray();

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
