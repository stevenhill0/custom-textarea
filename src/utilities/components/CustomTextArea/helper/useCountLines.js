import { useEffect } from 'react';
import { characterCount } from './characterCount';

export const useCountLines = (keyPress, characterArray, setLineCount) => {
  const { lastLine } = characterCount(characterArray);

  useEffect(() => {
    if (keyPress.key === 'Enter') {
      setLineCount((previous) => {
        return [...previous, lastLine];
      });

      //Add 1 to include each Enter key press
      setLineCount((previous) => {
        return [...previous, 1];
      });
    }
  }, [keyPress.key, setLineCount, lastLine, characterArray]);
};
