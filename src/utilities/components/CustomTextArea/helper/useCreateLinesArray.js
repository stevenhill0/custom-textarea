import { useState, useEffect } from 'react';

export const useCreateLinesArray = (keyPress, lastLine) => {
  const [linesArray, setLinesArray] = useState([]);
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

  return linesArray;
};
