import { useCountCharacters } from './useCountCharacters';
import { useCreateFilteredLinesArray } from './useCreateFilteredLinesArray';

export const useCombineLinesCharacters = (keyDownEventData) => {
  const { keyPress } = keyDownEventData;

  /**
   * Custom Hooks
   */

  const { firstLine, lastLine } = useCountCharacters(keyDownEventData);
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

  /**
   * Returned Value
   */

  return combinedLinesCharacters;
};
