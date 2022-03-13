import { useEffect } from 'react';

export const useCreateLinesArray = (keyPress, lastLine, setLinesArray) => {
  /**
   * Effects
   */

  useEffect(() => {
    if (keyPress === 'Enter') {
      setLinesArray((previous) => {
        return [...previous, lastLine];
      });
    }
  }, [keyPress, lastLine, setLinesArray]);
};
