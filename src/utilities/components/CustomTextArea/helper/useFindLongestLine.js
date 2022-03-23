import { useCreateFilteredLinesArray } from './useCreateFilteredLinesArray';

export const useFindLongestLine = () => {
  /**
   * Custom Hooks
   */

  const filteredLinesArray = useCreateFilteredLinesArray();

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
