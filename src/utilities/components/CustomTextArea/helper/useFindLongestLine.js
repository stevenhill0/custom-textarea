import { useCreateFilteredLinesArray } from './useCreateFilteredLinesArray';
import { useCountCharacters } from './useCountCharacters';

export const useFindLongestLine = (keyPress, countCharactersArray) => {
  /**
   * Custom Hooks
   */

  const { firstLine, lastLine } = useCountCharacters(countCharactersArray);
  const filteredLinesArray = useCreateFilteredLinesArray(
    keyPress,
    firstLine,
    lastLine,
  );

  /**
   * Logic
   */

  const longestLine = filteredLinesArray.reduce((previousLine, currentLine) => {
    return previousLine > currentLine ? previousLine : currentLine;
  });

  return longestLine;
};
