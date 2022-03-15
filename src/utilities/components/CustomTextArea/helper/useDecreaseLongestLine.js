import { useCreateFilteredLinesArray } from './useCreateFilteredLinesArray';
import { useCountCharacters } from './useCountCharacters';
import { useCompareLongestLineToMaxWidth } from './useCompareLongestLineToMaxWidth';

export const useDecreaseLongestLine = (
  pressedKeysAndMeasure,
  countCharactersArray,
) => {
  const { keyPress, liveWidth } = pressedKeysAndMeasure;

  /**
   * Custom Hooks
   */

  const { firstLine, lastLine } = useCountCharacters(countCharactersArray);
  const filteredLinesArray = useCreateFilteredLinesArray(
    keyPress,
    firstLine,
    lastLine,
  );

  const longestLineAtMaxWidth = useCompareLongestLineToMaxWidth(liveWidth);

  /**
   * Logic
   */

  const longestLine = filteredLinesArray.reduce((previousLine, currentLine) => {
    return previousLine > currentLine ? previousLine : currentLine;
  });

  const decreasedLongestLine = filteredLinesArray.map((line) => {
    if (keyPress === 'Backspace' && longestLine === liveWidth) {
      return line === longestLine ? line - 1 : line;
    }
    return line;
  });

  console.log('largestLine: ' + longestLine);
  console.log('liveWidth: ' + liveWidth); //liveWidth: starts at 29: adds 7 with every two keyPresses, but every 3rd keypress adds 8

  return decreasedLongestLine;
};
