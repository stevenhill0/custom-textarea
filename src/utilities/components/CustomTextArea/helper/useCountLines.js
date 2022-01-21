import { useEffect } from 'react';
import { countCharacters } from './countCharacters';

export const useCountLines = (keyPress, charactersArray, setLinesCount) => {
  const { lastLine } = countCharacters(charactersArray);

  useEffect(() => {
    if (keyPress.key === 'Enter') {
      setLinesCount((previous) => {
        return [...previous, lastLine];
      });

      //Add 1 to array to include each Enter key press
      setLinesCount((previous) => {
        return [...previous, 1];
      });
    }
  }, [keyPress.key, setLinesCount, lastLine, charactersArray]);
};
