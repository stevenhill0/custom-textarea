import { useEffect } from 'react';
import { countCharacters } from './countCharacters';

export const useCountLines = (
  charactersArray,
  pressedKeysAndMeasurement,
  setLinesCount,
) => {
  const { lastLine } = countCharacters(charactersArray);
  const { keyPress } = pressedKeysAndMeasurement;

  /**
   * Effects
   */

  useEffect(() => {
    if (keyPress === 'Enter') {
      setLinesCount((previous) => {
        return [...previous, lastLine];
      });

      //Add 1 to array to include each Enter key press
      setLinesCount((previous) => {
        return [...previous, 1];
      });
    }
  }, [keyPress, setLinesCount, lastLine, charactersArray]);
};
