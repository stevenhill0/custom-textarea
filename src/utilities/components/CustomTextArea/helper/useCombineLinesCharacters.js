import { useCountCharacters } from './useCountCharacters';
import { useCreateFilteredLinesArray } from './useCreateFilteredLinesArray';

export const useCombineLinesCharacters = (keyPress, countCharactersArray) => {
  const { firstLine, lastLine } = useCountCharacters(countCharactersArray);
  const filteredLinesArray = useCreateFilteredLinesArray(
    keyPress,
    firstLine,
    lastLine,
  );

  /**
   * Logic
   */

  const combinedLinesCharacters = filteredLinesArray.reduce(
    (previousLine, currentLine) => {
      return previousLine + currentLine;
    },
    0,
  );

  return combinedLinesCharacters;
};
