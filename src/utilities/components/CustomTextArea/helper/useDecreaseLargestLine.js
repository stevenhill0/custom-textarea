import { useCreateFilteredLinesArray } from './useCreateFilteredLinesArray';
import { useCountCharacters } from './useCountCharacters';

export const useDecreaseLargestLine = (
  keyPress,
  countCharactersArray,
  liveWidth,
) => {
  const { firstLine, lastLine } = useCountCharacters(countCharactersArray);
  const filteredLinesArray = useCreateFilteredLinesArray(
    keyPress,
    firstLine,
    lastLine,
  );

  /**
   * Logic
   */

  const largestLine = filteredLinesArray.map((currentLine) => {
    return currentLine === liveWidth ? previousLine : currentLine;
  });

  return largestLine;
};
