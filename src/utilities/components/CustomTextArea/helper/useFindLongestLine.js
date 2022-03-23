import { useCreateFilteredLinesArray } from './useCreateFilteredLinesArray';

export const useFindLongestLine = (keyPress) => {
  /**
   * Custom Hooks
   */

  const filteredLinesArray = useCreateFilteredLinesArray(keyPress);

  /**
   * Logic
   */

  const longestLine = filteredLinesArray.reduce((previousLine, currentLine) => {
    return previousLine > currentLine ? previousLine : currentLine;
  });

  /**
   * Returned Value
   */

  return longestLine;
};
