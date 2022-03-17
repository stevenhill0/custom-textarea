import { useCreateFilteredLinesArray } from './useCreateFilteredLinesArray';
import { useCountCharacters } from './useCountCharacters';
import { useFindLongestLine } from './useFindLongestLine';
import { useCompareLongestLineToMaxWidth } from './useCompareLongestLineToMaxWidth';

import { useState, useEffect } from 'react';

export const useDecreaseLongestLine = (
  pressedKeysAndMeasure,
  countCharactersArray,
) => {
  const [decreasedLine, setDecreasedLine] = useState(0);

  const { keyPress, liveWidth } = pressedKeysAndMeasure;

  /**
   * Custom Hooks
   */

  const longestLine = useFindLongestLine(keyPress, countCharactersArray);

  const longestLineAtMaxWidth = useCompareLongestLineToMaxWidth(
    liveWidth,
    longestLine,
  );
  const { firstLine, lastLine } = useCountCharacters(countCharactersArray);
  const filteredLinesArray = useCreateFilteredLinesArray(
    keyPress,
    firstLine,
    lastLine,
  );

  /**
   * Logic
   */
  // setDecreasedLine((line) => {
  //   return line === filteredLine ? [line - 1] : line;
  // });

  useEffect(() => {
    setDecreasedLine(longestLine);
  }, [longestLine]);

  useEffect(() => {
    if (keyPress === 'Backspace' && liveWidth) {
      setDecreasedLine((line) => {
        return line - 1;
      });
    }
  }, [keyPress, longestLine, liveWidth]);

  // console.log('decreasedLine: ' + decreasedLine);
  // console.log('longestLine: ' + longestLine);

  // console.log('liveWidth: ' + liveWidth); //liveWidth: starts at 29: adds 7 with every two keyPresses, but every 3rd keypress adds 8
  // console.log('decreasedLongestLine: ' + decreasedLongestLine);
  // return decreasedLongestLine;
};
