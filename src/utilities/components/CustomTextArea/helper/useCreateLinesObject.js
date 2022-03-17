import { useState, useEffect } from 'react';

export const useCreateLinesObject = (keyPress, lastLine) => {
  const [linesArray, setLinesArray] = useState({
    linesArray: [],
    selectionStart: 0,
  });

  /**
   * Effects
   */

  useEffect(() => {
    if (keyPress === 'Enter') {
      setLinesArray((previous) => {
        return {
          ...previous,
          linesArray: [...previous.linesArray, lastLine],
        };
      });
    }
  }, [keyPress, lastLine, setLinesArray]);

  return linesArray;
};
