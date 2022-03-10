import { useEffect } from 'react';

export const useCreateLinesArray = (keyPress, lastLine, setLinesArray) => {
  /**
   * Effects
   */

  useEffect(() => {
    if (keyPress === 'Enter') {
      //Add 1 to array to include each Enter key press
      setLinesArray((previous) => {
        return [...previous, lastLine, 1];
      });
    }
  }, [keyPress, lastLine, setLinesArray]);
};
